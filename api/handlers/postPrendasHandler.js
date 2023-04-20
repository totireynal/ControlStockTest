const postPrendasController = require("../controllers/postPrendasController");

const postPrendasHandler = async (req, res) => {
    const body = req.body;
    try {
        const results = await postPrendasController(body)
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postPrendasHandler;