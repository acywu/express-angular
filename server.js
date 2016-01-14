// Init
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');                         // log requests to the console (express4)
var bodyParser = require('body-parser');                // pull information from HTML POST (express4)
var methodOverride = require('method-override');        // simulate DELETE and PUT (express4)

// Configuration
mongoose.connect('mongodb://cyber:port@ds059644.mongolab.com:59644/express-angular');    // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public/app'));                 // set the static files location /public/img will be /img for users
app.use('/bower_components', express.static(__dirname + '/public/bower_components')); // set the static files location /bower_components will be /public/bower_components for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Data Model
var Book = mongoose.model('Book', {
    title : String,
    isbn: String
});

// Server Routes

    // API
    // Book: Get all books
    app.get('/api/books', function(req, res) {

        // use mongoose to get all todos in the database
        Book.find(function(err, books) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(books); // return all todos in JSON format
        });
    });

    // Book: Create one book
    app.post('/api/books', function(req, res) {
        // create a book, information comes from AJAX request from Angular
        Book.create({
            title : req.body.title,
            isbn: req.body.isbn
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Book.find(function(err, books) {
                if (err)
                    res.send(err)
                res.json(books);
            });
        });

    });

// listen (start app with node server.js)
app.listen(8080);
console.log("App listening on port 8080");
