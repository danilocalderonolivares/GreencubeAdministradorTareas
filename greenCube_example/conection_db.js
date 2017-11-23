var mongoose = require('mongoose');
mongoose.connect('mongodb://danilo:danilo93@ds259865.mlab.com:59865/pruebadb', { useMongoClient: true, });
mongoose.Promise = global.Promise;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TaskSchema = Schema({
    task: String
});
module.exports = mongoose.model('Task', TaskSchema);