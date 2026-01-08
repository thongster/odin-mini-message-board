const express = require('express');
const app = express();
const indexRoute = require('./routes/indexRoute');
const newRoute = require('./routes/newRoute');

app.use('/new', newRoute);
app.use('/', indexRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on port ${PORT}!`);
});
