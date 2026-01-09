// import router and create new router
const { Router } = require('express');
const newRoute = Router();

newRoute.get('/', (req, res) => {
  res.send('This is for new');
});

newRoute.post('/', (req, res) => {
  console.log(req.body);
  res.send(`${req.body.message}`);
});

newRoute.get('/form', (req, res) => {
  res.render('form');
});

module.exports = newRoute;
