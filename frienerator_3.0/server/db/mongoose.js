require('dotenv').config({ path: '../../.env' });
var mongoose = require('mongoose');
var pass = process.env.MONGO_DB_PASS;
var DB_URL = "mongodb+srv://vicki:" + encodeURIComponent(pass) + "@cluster0.vwzgp.mongodb.net/heroku_drzf9z0f?retryWrites=true&w=majority";
console.log('pass', pass);
var connectionOptions = {
    // poolSize: 20,
    socketTimeoutMS: 0,
    connectTimeoutMS: 0,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};
mongoose.connect(DB_URL, connectionOptions, function (err) {
    console.log('DB_URL', DB_URL);
    if (err) {
        console.log('error:', err.message);
    }
    else {
        console.log('The Mongoose connection is ready');
    }
});
module.exports = { mongoose: mongoose };
