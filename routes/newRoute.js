// import router and create new router
const { Router } = require('express');
const newRoute = Router();

// import messages model
const messages = require('../models/messageModel');

newRoute.get('/', (req, res) => {
  res.send('This is for new');
});

newRoute.post('/', (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.send(`${req.body.message}`);
});

newRoute.get('/form', (req, res) => {
  res.render('form');
});

module.exports = newRoute;
