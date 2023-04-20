const deletePrendasController = require('../controllers/deletePrendasController');
const deletePrendasHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const results = await deletePrendasController(id);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = deletePrendasHandler;