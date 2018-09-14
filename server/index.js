const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
// const passport = require('passport');
const { createBundleRenderer } = require('vue-server-renderer');
const bundleRenderer = createBundleRenderer(
  require('../frontend/dist/vue-ssr-bundle.json'),
  {
    template: fs.readFileSync('./index.html', 'utf-8'),
  },
);

const app = express();
app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

// app.set('views', 'frontend'); // specify the views directory
// app.set('view engine', 'ejs');
/*
LOGIN ***** PRE AUTHENTICATION
*/
// app.post('/login', (req, res) => {

// });
app.get('*', (req, res) => {
  bundleRenderer.renderToStream({ url: req.path })
    .pipe(res);
});
// /DURING THE SESSION
/*
POST SUBMIT
submit route that takes info from client and saves photo and geolocation to database

*/


app.listen('3000', () => console.log('listening on 3000'));
module.exports = app;
