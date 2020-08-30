var express = require('express');
var app = express();
var handlebars = require('handlebars');
var fs = require('fs');
var CronJob = require('cron').CronJob;

var nodemailer = require('nodemailer');
app.set("view engine", "ejs");


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

var methodOverride = require("method-override");
app.use(methodOverride("_method"));
var readHTMLFile = function (path, callback) {
    fs.readFile(path, {
        encoding: 'utf-8'
    }, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};


app.get("/", function (req, res) {


    res.render("form");
});

app.post("/sendmail", function (req, res) {
    var x = req.body.minutes + " " + req.body.hours + " * * " + req.body.days;
    var job = new CronJob('* /1 * * * *', function () {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'websitetest4334@gmail.com',
                pass: 'Asdfghjkl123!'
            }
        });

        readHTMLFile(__dirname + '/sendm.html', function (err, html) {
            var template = handlebars.compile(html);
            var replacements = {
                username: "Srezzx"
            };
            var htmltosend = template(replacements);
            var mailOptions = {
                from: 'websitetest4334@gmail.com',
                to: req.body.emailid,
                subject: '1Hello this is an automated email',
                text: req.body.content,
                html: htmltosend
                // attachments: [{
                //     filename: 'DailyReport' + Math.random() + '.xlsx',
                //     path: 'ExcelSheets/DailyReport' + ddd + '.xlsx'
                // }]
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

    }, null, true, 'America/Los_Angeles');
    job.start();


    res.redirect("/");
});



app.listen(process.env.PORT || 3000, process.env.ID, function (req, res) {
    console.log("Server has started for todoList at PORT 3000");
});