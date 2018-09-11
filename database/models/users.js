const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
const Schema = new mongoose.Schema();


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

const users = new Schema({
  username: String,
  report_count: Number,
});

const User = mongoose.model('User', users);

module.exports = User;
