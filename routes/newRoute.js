const { Router } = require('express');

const newRoute = Router();

newRoute.get('/new', (req, res) => {
  res.send('This is for new');
});

module.exports = newRoute;
