const restful = require('node-restful')

const mongoose = restful.mongoose

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 },
});

//Export model
module.exports = restful.model('genre', GenreSchema)