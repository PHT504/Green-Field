const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = new mongoose.Schema;

const PotHoleRecords = new Schema({
  lat: Number,
  long: Number,
  rating_mean: Number,
  reported_count: Number,
  last_reported: { type: Date, default: Date.now },
  photos: [String],
  users: [String]
});

const Users = new Schema({
  username: String,
  report_count: Number,
});