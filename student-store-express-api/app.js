// YOUR CODE HERE
const express = require('express')
const app = express()
const morgan = require("morgan")
const router = require("./routes/store")
const cors = require("cors")
app.use(cors())

//const { NotFoundError } = require('./utils/errors')

app.use(morgan("tiny"))
app.use(express.json())

app.get('/', (req,res) => {
   
    res.status(200).json({"ping":"pong"})
})

app.use("/store", router)



// app.use((req,res,next) =>{
//     return next(new NotFoundError("Not found"))
// })

// app.use((error,req,res,next) => {
//     const status = error.status || 500;
//     const message = error.message 

//     return res.status(status).json({
//         error:{message,status}
//     })
                                                                                                                                                                                                                                                    
// })





module.exports = app;