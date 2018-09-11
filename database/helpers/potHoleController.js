//this will be where much of the server does its interactions with the pot holes collection
const PotHole = require('../models/potHoles');


module.exports.addPotHoleMarker = function ({ lat, long, rating_mean, last_reported, reported_count, photos, user}, callback){

  const potHole = new PotHole({
    lat,
    long,
    rating_mean,
    reported_count,
    last_reported,
    photos,
    users,
  });

  potHole.save(err=>{
    if(err){
      console.error(err);
    }
    callback(err);
  })

};


