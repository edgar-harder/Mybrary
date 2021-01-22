if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs') //view engine to generate HTML with javascript
app.set('views', __dirname + '/views') //default folder where we find views
app.set('layout', 'layouts/layout') //every file is going to be put inside layout
app.use(expressLayout)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => {console.error(error)})
db.once('open', () => {console.log('Connected to Mongoose')})

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)