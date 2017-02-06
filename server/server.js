var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var config = require('./config.js');

var morgan = require('morgan');



var app = module.exports = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use(cors());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000*60*60*24*14) // 14 days
    }
}));



app.listen(config.port, function() {
    console.log("Yo, it's your port, " + config.port);
});
