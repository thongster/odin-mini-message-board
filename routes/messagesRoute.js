// import router and create new router
const { Router } = require('express');
const messagesRoute = Router();

// import messages model
const messages = require('../models/messageModel');

messagesRoute.get('/:id', (req, res) => {
  const message = messages[req.params.id];
  res.render('messages', { message: message });
});

module.exports = messagesRoute;
