const Store = require("../models/store");

const express = require("express");
const { BadRequestError } = require("../utils/errors");
const { getSingleProduct } = require("../models/store");

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    const purchases = req.body;

    const shoppingCart = purchases.shoppingCart;
    const user = purchases.user;

    if (!shoppingCart || !user || Store.checkErrors(shoppingCart)) {
      return next(new BadRequestError("Invalid input"));
    }

    const data = Store.purchaseOrder(shoppingCart, user);

    res.status(201).json({ purchase: data });
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res, next) => {
  const products = Store.getProducts();

  res.status(200).json({ "products": products });
});

router.get("/orders", (req, res, next) => {
  const purchases = Store.getPurchases();

  res.status(200).json({ "purchases": purchases });
});



router.get("/:productId", (req, res, next) => {
  const prodId = req.params.productId;

  const product = Store.getSingleProduct(Number(prodId));

  res.status(200).json({ "product": product });
});

module.exports = router;
