// this is the user helper function that will be where the server makes its interactions with the users collection for the time being
const User = require('../models/users');

module.exports.addUser = function addUser({ username }, callback) {
  const user = new User({
    username,
    report_count: 0,
  });

  user.save((err) => {
    if (err) {
      console.error(err);
    }
    callback(err);
  });
};

module.exports.selectUser = function selectUser(username, callback) {
  const query = User.where({ username });
  query.findOne((err, res) => {
    if (err) {
      console.error(err);
      callback(err, res);
    } else if (res === null) {
      callback('not found', res);
    } else {
      callback(undefined, res);
    }
  });
};


