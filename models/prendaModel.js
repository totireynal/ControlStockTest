const mongoose = require('mongoose');
const prendaSchema = require('../schemas/schemas');

const PrendaModel = mongoose.model('Prenda', prendaSchema);

module.exports = PrendaModel
