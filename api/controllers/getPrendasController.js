const PrendaModel = require("../models/prendaModel")

const getPrendasController = async () => {
    const results = await PrendaModel.find();
    if(!results) throw new Error('Prendas not found');
    return results;
}


module.exports = getPrendasController;