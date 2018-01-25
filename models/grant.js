var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    url: { type: String, required: true },
    categories: [{ type: String }],
    duration: { type: Date }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Grant', schema);