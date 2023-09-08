require('dotenv').config()

//creating the express app
const express = require('express')

// express app
const intranet = express()

//middleware
intranet.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//reacting to a request. API END POINT
intranet.get('/', (req,res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listening to a request
 intranet.listen(process.env.PORT, () => {
    console.log('Listening to port',process.env.PORT)
 })

