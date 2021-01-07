const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
require('dotenv').config();
const api = require('./server/routes/api')
const port = process.env.PORT

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use(express.static(path.join(__dirname, 'build')));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', api);

app.listen(port , function () {
    console.log(`listening on ${port}`);
});

module.exports = app