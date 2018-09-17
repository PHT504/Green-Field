const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/27016');
mongoose.connect(process.env.MONGO_LOC || 'mongodb://localhost/27016');


module.exports = mongoose;
