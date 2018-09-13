// this is the user helper function that will be where the
// server makes its interactions with the users collection for the time being
const User = require('../models/users');

const addUser = ({ username }, callback) => {
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

const selectUser = ({ username }, callback) => {
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

const updateReportCount = ({ username }, callback) => {
  let reportCount;
  selectUser(username, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      reportCount = res.report_count + 1;
      User.findOneAndUpdate({ username }, { report_count: reportCount }, callback);
    }
  });
};

module.exports.addUser = addUser;

module.exports.selectUser = selectUser;

module.exports.updateReportCount = updateReportCount;
