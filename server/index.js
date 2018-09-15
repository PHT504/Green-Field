const express = require('express');
const bodyParser = require('body-parser');
// const passport = require('passport');

const parseurl = require('parseurl');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// const cookieParser = require('cookie-parser');
const UserDB = require('../database/helpers/userController');
const PotHoleDB = require('../database/helpers/potHoleController');
const options = require('../database/models/sessionStore');

const app = express();
// after reading the notes on express-session, it says cookie parser is no longer needed
// app.use(cookieParser());
// secret in honor of randy
app.use(session({
  secret: 'find my p hole',
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
  rolling: true,
  store: new MongoStore({ mongooseConnection: options.connection, useNewUrlParser: true }),
}));

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {};
  }

  // get the url pathname
  const { pathname } = parseurl(req);

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

  next();
});
app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

// app.set('views', 'frontend'); // specify the views directory
// app.set('view engine', 'ejs');
/*
LOGIN ***** PRE AUTHENTICATION
*/
// app.post('/login', (req, res) => {

// });

// /DURING THE SESSION

// DURING THE SESSION

app.post('/signup', (req, res) => {
  console.log(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  UserDB.addUser(req.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result, ' we added a user with a encrypted password');
      res.redirect('/login');
    }
  });
  res.sendStatus(201);
});

app.post('/login', (req, res) => {
  UserDB.selectUser(req.body, (err, result) => {
    if (err) {
      console.error(err);
      req.session.access = false;
      res.sendStatus(500);
    } else if (bcrypt.compareSync(req.body.password, result.password)) {
      req.session.access = true;
      res.redirect('/map');
      res.sendStatus(200);
    } else {
      req.session.access = false;
      if (req.session.views['/login'] > 3) {
        req.session.views['/login'] = 0;
        res.redirect('/signup');
      } else {
        res.sendStatus(200);
      }
    }
  });
});

app.get('/map', (req, res) => {
  console.log(req.session.access);
  if (req.session.access === true) {
    PotHoleDB.grabMarkers((err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.status(200);
        res.send(result);
      }
    });
  } else {
    res.redirect('/login');
    res.sendStatus(403);
  }
});
/*
POST SUBMIT
submit route that takes info from client and saves photo and geolocation to database

*/
app.post('/submit', (req, res) => {
  console.log((req.body));
  if (req.session.access) {
    PotHoleDB.addPotHoleMarker(req.body, (err) => {
      if (err) {
        console.error(err);
      } else {
        // console.log(result);
        console.log('we made a mark, pun intended');
      }
    });
    res.sendStatus(201);
  } else {
    res.sendStatus(403);
  }
});

app.listen('3000', () => console.log('listening on 3000'));
module.exports = app;
