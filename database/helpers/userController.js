// this is the user helper function that will be where the
// server makes its interactions with the users collection for the time being
const User = require('../models/users');

const selectUser = ({ username }, callback) => {
  User.where({ username }).findOne((err, res) => {
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

const addUser = ({ username }, callback) => {
  selectUser({ username }, (er) => {
    if (er === 'not found') {
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
    } else {
      console.error(er);
      console.log('user may already exist');
      callback(er);
    }
  });
};


const updateReportCount = ({ username }, callback) => {
  let reportCount;
  selectUser({ username }, (err, res) => {
    if (err) {
      console.log(err, ' line 45');
    } else {
      reportCount = res.report_count + 1;
      User.findOneAndUpdate({ username }, { report_count: reportCount }, callback);
    }
  });
};

module.exports.addUser = addUser;

module.exports.selectUser = selectUser;

module.exports.updateReportCount = updateReportCount;
