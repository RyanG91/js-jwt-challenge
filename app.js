// dependencies
const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
// const passport = require('passport');
const mongoose = require('mongoose');
// const User = require('./models/user');
const { initializePassport } = require('./middleware/auth')

const app = express();

// parse json
app.use(bodyParser.json());

app.use(initializePassport);

// mongoose
mongoose.connect('mongodb://localhost/express-mongo-passport', (err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database!');
  }
});

app.use('/', routes);

app.listen(5000, () => console.log('Listening on http://localhost:5000'));
