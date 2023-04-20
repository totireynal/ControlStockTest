const PrendaModel = require("../models/prendaModel");

const postPrendasController = async (body) => {
const create = new PrendaModel(body)
const results = await create.save();
return results;
} 

module.exports = postPrendasController;