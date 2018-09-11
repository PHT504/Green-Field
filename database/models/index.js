const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = new mongoose.Schema;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we\'re connected!');
});

const potHoleRecords = new Schema({
  lat: Number,
  long: Number,
  rating_mean: Number,
  reported_count: Number,
  last_reported: { type: Date, default: Date.now },
  photos: [String],
  users: [String]
});

const PotHoles = mongoose.model('Potholes', potHoleRecords);

module.exports = PotHoles;