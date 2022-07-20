const book = require('./book');
//Create REST API, adds CRUD to Mongog's schema
book.methods(['get', 'post', 'put', 'delete']);
//Return post/put methods updated
book.updateOptions({ new: true, runValidators: true });
module.exports = book