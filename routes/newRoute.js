// import router and create new router
const { Router } = require('express');
const newRoute = Router();

// // import messages model
// const messages = require('../models/messageModel');

// import queries
const db = require('../db/queries');

newRoute.get('/', (req, res) => {
  res.render('new');
});

newRoute.post('/', async (req, res) => {
  await db.addMessage(req.body.username, req.body.text);
  res.redirect('/');
});

module.exports = newRoute;
