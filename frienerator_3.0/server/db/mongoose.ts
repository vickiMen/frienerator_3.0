require('dotenv').config({path: '../../.env'});
const mongoose = require('mongoose')

const pass = process.env.MONGO_DB_PASS
const DB_URL = `mongodb+srv://vicki:${encodeURIComponent(pass)}@cluster0.vwzgp.mongodb.net/heroku_drzf9z0f?retryWrites=true&w=majority`

const connectionOptions = {
    // poolSize: 20,
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(DB_URL, connectionOptions, (err) => {
    console.log('DB_URL',DB_URL)
    if (err) {
        console.log('error:', err.message)
    } else {
        console.log('The Mongoose connection is ready');
    }
})

module.exports = { mongoose }