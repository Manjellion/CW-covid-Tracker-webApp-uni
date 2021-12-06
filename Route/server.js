const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const covid_Doc = require('./index')

const app = express();
const PORT = 8080;

// Data Parsing
// Enabling Middleware
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/all-covid-Data', (req, res) => {
    covid_Doc.find({})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
});


app.listen(PORT, function() {
    console.log(`Server started ${PORT}`);
});