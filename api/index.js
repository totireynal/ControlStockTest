const mongoose = require('mongoose');
const server = require('./app');


const url = 'mongodb://127.0.0.1/stock';

mongoose.connect(url)
.then(() => {
    console.log('Connected to Mongo');
    server.listen(3001, () => {
        console.log('Server connected on port 3001');
    })
})
.catch((err) => console.log(`Not connected, error: ${err}`))


