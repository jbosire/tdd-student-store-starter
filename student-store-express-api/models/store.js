const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

//var products = 5;
class Store {

  static  getPurchases(){
    const purchases = storage.get("purchases").value();
    return purchases;
  }

  static getProducts() {
    const products = storage.get("products").value();

    return products;
  }

  static getSingleProduct(id) {
    const item = storage
      .get("products")
      .value()
      .find((elem) => elem.id === id);
    return item;
  }

  static checkErrors(cart) {
    for (let i = 0; i < cart.length; i++) {
      var curr = cart[i];
      if (!curr.quantity || !curr.itemId) {
        return true;
      }

      for (let j = i + 1; j < cart.length; j++) {
        var acc = cart[j];
        if (curr.itemId == acc.itemId) {
          return true;
        }
      }
    }

    return false;
  }

  static totCost(cart) {
    var subprice = 0;

    cart.forEach((element) => {
      var item = this.getSingleProduct(element.itemId);
      var unitPrice = item.price;
      var elemPrice = unitPrice * element.quantity;
      subprice += elemPrice;
    });

   
    subprice = Math.round((subprice + Number.EPSILON) * 100) / 100;
    return subprice;
  }

  static createId() {
    const purchases = storage.get("purchases").value();

    return purchases.length + 1;
  }

  static createDate() {
    var current = new Date();
    var year = current.getFullYear();
    var month = current.getMonth() + 1;
    var day = current.getDate();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    var date =
      "Date: " +
      month +
      ":" +
      day +
      ":" +
      year +
      " Time: " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
    return date;
  }

  static createReceipt(cart,user){
    var info = {
      "name" : user.name,
      "email" : user.email,
    }

    

    var lines = ["Showing receipt for " + user.name + " available at " + user.email]
    cart.forEach((element) => {
      var item = this.getSingleProduct(element.itemId);
      var unitPrice = item.price;
      var elemPrice = unitPrice * element.quantity;
      var line = element.quantity + " total " + item.name + " purchased at a cost of " + unitPrice + " for a total cost of " + elemPrice + "."
      lines.push(line)
    });
    var totalcost = this.totCost(cart)
    var taxcost = totalcost * 1.0875
    var subtotal = "Before taxes, the subtotal was $" + totalcost
    var total = "After taxes and fees were applied, the total comes out to $" + taxcost
    lines.push(subtotal);
    lines.push(total)

    var receipt =  { "userInfo" : info,
    "lines" : lines
    }

    return receipt
  

  }

  static purchaseOrder(cart, user) {
    var subtotal = this.totCost(cart);
    subtotal = Math.round((subtotal + Number.EPSILON) * 100) / 100;
    var taxes = subtotal * 0.0875;
    taxes = Math.round((taxes + Number.EPSILON) * 100) / 100;
    var total = subtotal + taxes
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    var order = {
      id: this.createId(),
      name: user.name,
      email: user.email,
      order: cart,
      taxes: taxes,
      subtotal: subtotal,
      total: total,
      createdAt: this.createDate(),
      receipt: this.createReceipt(cart,user)
    };

    let currentPurchases = storage.get("purchases");
    currentPurchases.push(order).write();


    return order;
  }
}

module.exports = Store;
