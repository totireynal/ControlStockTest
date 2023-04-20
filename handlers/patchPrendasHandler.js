const patchPrendasController = require("../controllers/patchPrendasController");

const patchPrendasHandler = async (req, res) => {
    const { id } =  req.params;
    const body = req.body;
    try {
        const results = await patchPrendasController(id, body);
        res.status(200).json(results);

    } catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = patchPrendasHandler;