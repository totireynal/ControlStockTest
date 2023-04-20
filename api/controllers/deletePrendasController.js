const PrendaModel = require("../models/prendaModel")

const deletePrendasController = async (id) => {
    const results = await PrendaModel.deleteOne({_id:id});
    return results;
}

module.exports = deletePrendasController;