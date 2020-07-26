var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoDB',{ useNewUrlParser: true , useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database Connection Failed'));

db.once('open', function() {
    console.log('Database Connection Success');
});