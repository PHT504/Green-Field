// this will be where much of the server does its interactions with the pot holes collection
const PotHole = require('../models/potHoles');

const checkForMarker = ({ lat, long }, maxDistance, callback) => {
  console.log(lat, long, 'this is lat and long');
  const greaterLat = Number(Number.parseFloat(lat).toFixed(5)) + maxDistance;
  const lesserLat = Number(Number.parseFloat(lat).toFixed(5)) - maxDistance;
  const greaterLong = Number(Number.parseFloat(long).toFixed(5)) + maxDistance;
  const lesserLong = Number(Number.parseFloat(long).toFixed(5)) - maxDistance;

  PotHole.findOne().where('lat')
    .gte(lesserLat)
    .lte(greaterLat)
    .where('long')
    .gte(lesserLong)
    .lte(greaterLong)
    .exec(callback);
};

module.exports.grabMarkers = (callback) => {
  const query = PotHole.find();
  query.select('-users').exec(callback);
  if (query.selected()) {
    console.log('successfully selected markers!');
  }
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
  checkForMarker({ lat, long }, Number(0.0001), (err, res) => {
    console.log(res);
    if (err) {
      console.error(err);
    } else if (res === null || !res.users.length) {
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
    } else if (res.users.indexOf(user) === -1) {
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
