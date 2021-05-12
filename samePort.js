const express = require("express");

const path = __dirname + '/views/';
const app = express();

app.use(express.static(path));

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
});