// this will be where much of the server does its interactions with the pot holes collection
const PotHole = require('../models/potHoles');

const checkForMarker = ({ lat, long }, maxDistance, callback) => {
  const greaterLat = Number.parseFloat(lat).toFixed(5) + maxDistance;
  const lesserLat = Number.parseFloat(lat).toFixed(5) - maxDistance;
  const greaterLong = Number.parseFloat(long).toFixed(5) + maxDistance;
  const lesserLong = Number.parseFloat(long).toFixed(5) - maxDistance;

  PotHole.find().where('lat')
    .gte(lesserLat)
    .lte(greaterLat)
    .where('long')
    .gte(lesserLong)
    .lte(greaterLong)
    .exec(callback);
};

module.exports.addPotHoleMarker = function addPotHoleMarker(
  {
    lat,
    long,
    rating,
    photo,
    user,
  }, callback,
) {
  checkForMarker({ lat, long }, 0.0001, (err, res) => {
    if (err) {
      console.error(err);
    } else if (res === null) {
      const potHole = new PotHole({
        lat: Number.parseFloat(lat).toFixed(5),
        long: Number.parseFloat(long).toFixed(5),
        rating_mean: rating,
        reported_count: 1,
        photos: [photo],
        users: [user],
      });

      potHole.save((errr) => {
        if (errr) {
          console.error(errr);
        }
        callback(errr);
      });
    } else if (res.users.indexOf(user) !== -1) {
      res.photos.push(photo);
      res.users.push(user);
      res.reported_count += 1;
      res.rating_mean = (res.rating_mean + rating) / res.reported_count;
      PotHole.findOneAndUpdate({ lat: res.lat, long: res.long },
        {
          users: res.users,
          photos: res.photos,
          reported_count: res.reported_count,
          rating_mean: res.rating_mean,
        }, callback);
    }
  });
};
