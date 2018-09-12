const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.set("views", "client"); // specify the views directory
app.set("view engine", "ejs"); 
app.get('/', (req, res) => {
res.render('login');
})
/*
POST SUBMIT
submit route that takes info from client and saves photo and geolocation to database

*/


app.listen('3000', () => console.log('listening on 3000'));
module.exports = app;
