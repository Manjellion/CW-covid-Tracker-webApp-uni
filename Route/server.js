const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const covid_Doc = require('./index')

const app = express();
const router = express.Router();
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

router.route('/all-covid-Data').post((req, res) => {
    const date = req.body.date;
    const state = req.body.state;
    const cases = req.body.cases;
    const deaths = req.body.deaths;
    const newData = new covid_Doc({
        date,
        state,
        cases,
        deaths
    });

    newData.save();
})


app.listen(PORT, function() {
    console.log(`Server started ${PORT}`);
});