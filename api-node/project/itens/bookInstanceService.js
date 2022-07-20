const bookinstance = require('./bookinstance');
//Create REST API, adds CRUD to Mongog's schema
bookinstance.methods(['get', 'post', 'put', 'delete']);
//Return post/put methods updated
bookinstance.updateOptions({ new: true, runValidators: true });
module.exports = bookinstance