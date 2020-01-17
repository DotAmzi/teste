var express = require("express");

var app = express();

var bodyParser = require('body-parser')

var fs = require("fs")


app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get("/", function (req, res) {
    res.sendfile("/public/index.html");
});