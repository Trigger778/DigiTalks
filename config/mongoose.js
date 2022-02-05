const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ps2:fGdVNnfDmYM4PO0n@cluster0.xzvh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;