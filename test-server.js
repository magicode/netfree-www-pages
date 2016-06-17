
var express = require("express");
var path = require("path");

var app = express();

app.use("/pages/", express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);