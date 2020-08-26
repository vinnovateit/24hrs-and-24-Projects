var express = require("express");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(process.env.PORT || 8000, function () {
    console.log("SERVER 8000 HAS STARTED");
});