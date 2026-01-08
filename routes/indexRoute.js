const { Router } = require('express');

const indexRoute = Router();

indexRoute.get('/', (req, res) => {
  res.send('This is the index page');
});

module.exports = indexRoute;
