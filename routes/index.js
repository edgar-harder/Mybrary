//all routes for index of our app
const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index') //renders index.ejs
})

module.exports = router