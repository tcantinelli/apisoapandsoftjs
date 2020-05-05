const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocalisationSchema = new Schema({
    dateVisit: Date,
    ip: String,
    city: String,
    region: String,
    country: String
})

const Localisation = mongoose.model('localisation', LocalisationSchema, 'LOCALISATION');

module.exports = Localisation;