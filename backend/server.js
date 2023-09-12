require('dotenv').config()

//creating the express app
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')
// express app
const intranet = express()

//middleware
intranet.use(express.json())

intranet.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//reacting to a request. API END POINT. routes
intranet.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URL)
    .then(() => { 
        //listening to a request
 intranet.listen(process.env.PORT, () => {
    console.log('connecting to db and Listening to port',process.env.PORT)
 })
    })
    .catch((error) => {
        console.log(error)
    })



