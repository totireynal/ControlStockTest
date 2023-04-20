const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const prendasRouter = require('./routes/prendasRouter');


const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));


server.use('/prendas', prendasRouter);


module.exports = server;