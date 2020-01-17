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


var server = app.listen(443, function () {
    console.log("Example app listening at http://%s:%s", server.address().address, server.address().port)
});