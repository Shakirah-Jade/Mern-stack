const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg:'Get all workouts'})
})

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg:'Get a single workout'})
})

// post a new worker
router.post('/', (req, res) => {
    res.json({mssg: 'Post a new worker'})
})

// Delete a worker
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a worker'})
})

// Update a worker
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a worker'})
})

//exporting the routes
module.exports = router

