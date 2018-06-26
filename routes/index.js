const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();

const { requireJwt, register, signJwtForUser, login } = require('../middleware/auth')

router.get('/', (req, res) => {
  res.send('Anyone can view this page!')
});

router.get('/protected', (req, res) => {
  res.send('You have a valid token')
});

router.post('/register', register, signJwtForUser);

router.post('/login', login, signJwtForUser);

module.exports = router;
