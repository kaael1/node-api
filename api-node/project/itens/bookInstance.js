const restful = require('node-restful')
const mongoose = restful.mongoose

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
});

//Export model
module.exports = restful.model('bookInstance', BookInstanceSchema)