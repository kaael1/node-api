const restful = require('node-restful')
const mongoose = restful.mongoose

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, max: 100 },
    family_name: { type: String, required: true, max: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
});

//Export model
module.exports = restful.model('author', AuthorSchema)