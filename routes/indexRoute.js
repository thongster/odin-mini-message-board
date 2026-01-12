// import router and create new router
const { Router } = require('express');
const indexRoute = Router();

// import queries
const db = require('../db/queries');

indexRoute.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {
    title: "Maya's House Message Board",
    messages: messages,
  });
});

module.exports = indexRoute;
