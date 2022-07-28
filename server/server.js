const express = require('express');
const routes = require('./routes')
const cors = require('cors')

const app = express()


// app
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// router
app.use('/api', routes)

const port = 5000
app.listen(port, console.log(`Server running on port ${port}`))