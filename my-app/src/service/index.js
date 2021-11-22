const express = require('express')
const mongoose = require('mongoose')
const Data = require('./covidData')
const app = express();

const PORT = 8080;

mongoose.connect("mongodb+srv://test:test@cluster0.ujlbn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true})

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Check server is running")
})

app.get('/all-Data', (req, res) => {
    Data.findById('619b229c44c32ed77f9c34c4')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

app.listen(PORT, () => {
    console.log(`Port begun on host ${PORT}`);
})