// import router and create new router
const { Router } = require('express');
const messagesRoute = Router();

// // import messages model
// const messages = require('../models/messageModel');

// import queries
const db = require('../db/queries');

messagesRoute.get('/:id', async (req, res) => {
  const query = await db.getMessageByID(Number(req.params.id));
  const message = query[0];
  console.log(message);
  res.render('messages', { message: message });
});

module.exports = messagesRoute;
