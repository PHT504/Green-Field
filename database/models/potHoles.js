const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/27016');

mongoose.connect(process.env.MONGO_LOC);

const { Schema } = mongoose;


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we\'re connected!');
});

const potHoleRecords = new Schema({
  lat: Number,
  long: Number,
  rating_mean: Number,
  reported_count: Number,
  last_reported: { type: Date, default: Date.now },
  photos: [String],
  users: [String],
});
potHoleRecords.index({});
const PotHoles = mongoose.model('Potholes', potHoleRecords);

module.exports = PotHoles;
