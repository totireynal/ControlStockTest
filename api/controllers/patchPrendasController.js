const PrendaModel = require("../models/prendaModel")

const patchPrendasController = async (id, body) => {
    const results = await PrendaModel.updateOne({_id: id}, 
        {
            $set: body
        })

        return results;
}


module.exports = patchPrendasController;