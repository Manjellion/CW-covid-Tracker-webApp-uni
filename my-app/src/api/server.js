require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { userNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.on('opem', () => console.error('Connected to Database'))

app.use(express.json())

const CovidDataRouter = require('./routes/CovidData')
app.use('/CovidData', CovidDataRouter)

app.listen(3000, ()=> {
    console.log('Server has started');
})