const express = require('express');
const routes = require('./routes')

const app = express()


// app
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// router
app.use('/api', routes)

const port = 5000
app.listen(port)