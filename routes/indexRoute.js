// import router and create new router
const { Router } = require('express');
const indexRoute = Router();

// import messages model
const messages = require('../models/messageModel');

indexRoute.get('/', (req, res) => {
  res.render('index', {
    title: "Maya's House Message Board",
    messages: messages,
  });
});

module.exports = indexRoute;
