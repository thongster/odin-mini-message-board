// import router and create new router
const { Router } = require('express');
const newRoute = Router();

// import messages model
const messages = require('../models/messageModel');

newRoute.get('/', (req, res) => {
  res.render('new');
});

newRoute.post('/', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = newRoute;
