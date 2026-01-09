// import router and create new router
const { Router } = require('express');
const messagesRoute = Router();

// import messages model
const messagesArray = require('../models/messageModel');

messagesRoute.get('/:id', (req, res) => {
  res.send('testing');
});

module.exports = messagesRoute;
