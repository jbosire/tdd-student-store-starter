// YOUR CODE HERE
const express = require('express')
const app = express()
const morgan = require("morgan")
const router = require("./routes/store")
const cors = require("cors")
app.use(cors())


app.use(morgan("tiny"))
app.use(express.json())

app.get('/', (req,res) => {
   
    res.status(200).json({"ping":"pong"})
})

app.use("/store", router)








module.exports = app;