require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// var api = require('./server/routes/api');
var port = process.env.PORT;
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// app.use(express.static(path.join(__dirname, 'build')));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
// app.use( `/`, router);
app.listen(port, function () {
    console.log("listening on " + port);
});
module.exports = app;
