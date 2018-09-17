// this will be where much of the server does its interactions with the pot holes collection
const PotHole = require('../models/potHoles');
const userHelp = require('./userController');

const checkForMarker = ({ lat, lng }, maxDistance, callback) => {
  console.log(lat, lng, 'this is lat and long');
  const greaterLat = Number(Number.parseFloat(lat).toFixed(5)) + maxDistance;
  const lesserLat = Number(Number.parseFloat(lat).toFixed(5)) - maxDistance;
  const greaterLong = Number(Number.parseFloat(lng).toFixed(5)) + maxDistance;
  const lesserLong = Number(Number.parseFloat(lng).toFixed(5)) - maxDistance;

  PotHole.findOne().where('lat')
    .gte(lesserLat)
    .lte(greaterLat)
    .where('lng')
    .gte(lesserLong)
    .lte(greaterLong)
    .exec(callback);
};

module.exports.removeMarker = ({ lat, lng }, callback) => {
  PotHole.deleteOne({ lat, lng }, callback);
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
    lng,
    rating,
    photo,
    username,
  }, callback,
) {
  console.log(lng, ' this is the lng being added');
  checkForMarker({ lat, lng }, Number(0.0001), (err, res) => {
    if (err) {
      console.error(err);
    } else if (res === null || !res.users.length) {
      userHelp.updateReportCount({ username }, (er, feedback) => {
        if (er) {
          console.error(er, ' line 49');
        } else {
          console.log(feedback, ' this is the feedback');
        }
      });
      const potHole = new PotHole({
        lat: Number(Number.parseFloat(lat).toFixed(5)),
        lng: Number(Number.parseFloat(lng).toFixed(5)),
        rating_mean: rating,
        reported_count: 1,
        photos: [photo],
        users: [username],
      });

      potHole.save((errr) => {
        if (errr) {
          console.error(errr);
        }
        callback(errr);
      });
    } else if (res.users.indexOf(username) === -1) {
      res.photos.push(photo);
      res.users.push(username);
      res.reported_count += 1;
      res.rating_mean = (res.rating_mean + rating) / res.reported_count;
      userHelp.updateReportCount({ username }, (er, feedback) => {
        if (er) {
          console.error(er, ' line 76');
        } else {
          console.log(feedback);
        }
      });
      PotHole.findOneAndUpdate({ lat: res.lat, lng: res.lng },
        {
          users: res.users,
          photos: res.photos,
          reported_count: res.reported_count,
          rating_mean: res.rating_mean,
        }, callback);
    }
  });
};
