// this will be where much of the server does its interactions with the pot holes collection
const PotHole = require('../models/potHoles');


module.exports.addPotHoleMarker = function addPotHoleMarker(
  {
    lat,
    long,
    ratingMean,
    lastReported,
    reportedCount,
    photo,
    user,
  }, callback,
) {
  const potHole = new PotHole({
    lat,
    long,
    rating_mean: ratingMean,
    reported_count: reportedCount,
    last_reported: lastReported,
    photos: [photo],
    users: [user],
  });

  potHole.save((err) => {
    if (err) {
      console.error(err);
    }
    callback(err);
  });
};
