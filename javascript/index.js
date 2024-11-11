"use strict";
var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
