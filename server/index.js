const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const UserDB = require('../database/helpers/userController');
const PotHoleDB = require('../database/helpers/potHoleController');

const app = express();
app.use(bodyParser.json());
app.set('views', 'client'); // specify the views directory
app.set('view engine', 'ejs');

/*
LOGIN ***** PRE AUTHENTICATION
*/
app.get('/', (req, res) => {
  res.render('login');
});


// DURING THE SESSION

app.post('/newUser', (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  UserDB.addUser(req.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result, ' we added a user with a encrypted password');
    }
  });
  res.sendStatus(201);
});

/*
POST SUBMIT
submit route that takes info from client and saves photo and geolocation to database

*/
app.post('/submit', (req, res) => {
  console.log((req.body));

  PotHoleDB.addPotHoleMarker(req.body, (err) => {
    if (err) {
      console.error(err);
    } else {
      // console.log(result);
      console.log('we made a mark, pun intended');
    }
  });
  res.sendStatus(201);
});

app.listen('3000', () => console.log('listening on 3000'));
module.exports = app;
