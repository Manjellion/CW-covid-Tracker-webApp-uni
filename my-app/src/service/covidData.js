const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the Structure of our Covid Data documenet
const covidSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    cases: {
        type: String,
        required: true
    },
    deaths: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Store this model so it can automatically look for the base name with the schema
const Data = mongoose.model('Data', covidSchema);

// export this module
module.exports = Data;