const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.listen('3000', () => console.log('listening on 3000'));
// Do not touch the exports object
module.exports = app;
