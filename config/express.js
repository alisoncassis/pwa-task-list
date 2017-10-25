const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'));

app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;
