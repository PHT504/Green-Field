const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/27016');
// mongoose.connect(process.env.MONGO_LOC);

const { Schema } = mongoose;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

const users = new Schema({
  username: String,
  password: String,
  report_count: Number,
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', users);

module.exports = User;
