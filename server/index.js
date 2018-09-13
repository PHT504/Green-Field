const express = require('express');
const bodyParser = require('body-parser');
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


/*
POST SUBMIT
submit route that takes info from client and saves photo and geolocation to database

*/
app.post('/submit', (req, res) => {
  console.log((req.body));
  UserDB.addUser(req.body, (err) => {
    if (err) {
      console.error(err);
    } else {
      // console.log('success maybe');
    }
  });
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
