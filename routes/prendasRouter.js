const prendasRouter = require('express').Router();
const deletePrendasHandler = require('../handlers/deletePrendasHandler');
const getPrendasHandler = require('../handlers/getPrendasHandler');
const patchPrendasHandler = require('../handlers/patchPrendasHandler');
const postPrendasHandler = require('../handlers/postPrendasHandler');



prendasRouter.get('/', getPrendasHandler);
prendasRouter.post('/', postPrendasHandler);
prendasRouter.patch('/:id', patchPrendasHandler);
prendasRouter.delete('/:id', deletePrendasHandler);

module.exports = prendasRouter;