const getPrendasController = require("../controllers/getPrendasController");

const getPrendasHandler = async (req, res) => {
  try {
        const results = await getPrendasController()
        res.status(200).json(results)
        } catch (error){
        res.status(500).json({error: error.message})
        }
    

}


module.exports = getPrendasHandler;