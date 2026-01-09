const express = require('express');
const app = express();

// set up ejs using views directory
const path = require('node:path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// load static files
app.use(express.static(path.join(__dirname, 'public')));

// import routers
const indexRoute = require('./routes/indexRoute');
const newRoute = require('./routes/newRoute');

// use routes
app.use('/new', newRoute);
app.use('/', indexRoute);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on port ${PORT}!`);
});
