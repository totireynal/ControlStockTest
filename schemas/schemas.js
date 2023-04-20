const mongoose = require('mongoose');

const prendaSchema = new mongoose.Schema({
    tipo: String,
    marca: String,
    color: String,
    talle: Number,
    count: Number

});

module.exports = prendaSchema;