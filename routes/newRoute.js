const { Router } = require('express');

const newRoute = Router();

newRoute.get('/', (req, res) => {
  res.send('This is for new');
});

newRoute.get('/form', (req, res) => {
  res.render('form');
});

module.exports = newRoute;
