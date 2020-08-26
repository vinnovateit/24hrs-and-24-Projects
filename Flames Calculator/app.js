var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("index.ejs", {
		background_img: "/assets/main_bg.png",
	});
});
app.get("/play", function (req, res) {
	res.render("side.ejs", {
		background_img: "/assets/side_bg.png",
	});
});

app.listen(process.env.PORT || 8000, function () {
	console.log("SERVER 8000 HAS STARTED");
});
