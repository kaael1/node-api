const author = require('./author');
//Create REST API, adds CRUD to Mongog's schema
author.methods(['get', 'post', 'put', 'delete']);
//Return post/put methods updated
author.updateOptions({ new: true, runValidators: true });
module.exports = author