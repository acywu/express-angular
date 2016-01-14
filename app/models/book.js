var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookSchema   = new Schema({
    name: String
    isbn: String
    createdAt: Date
});

module.exports = mongoose.model('Book', BookSchema);
