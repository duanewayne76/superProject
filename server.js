// var unirest = require('unirest');
const express = require('express');
const app = express();
var port = process.env.PORT || 80;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
    console.log('static file request : ' + req.params);
    res.sendFile(process.cwd() + req.params[0]);
});
// unirest.get("https://www.enclout.com/api/v1/dns/show.json?&auth_token=jsvXsM7Cx4AH-r3YURXp&url=google.com")
//     .header("X-RapidAPI-Host", "enclout-dns.p.rapidapi.com")
//     .header("X-RapidAPI-Key", "bea944226amsh898e8f2e830e27cp17c2e2jsne8f88fdb0919")
//     .end(function(result) {
//         console.log(result.status, result.headers, result.body);
//     });

app.listen(port, err => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});