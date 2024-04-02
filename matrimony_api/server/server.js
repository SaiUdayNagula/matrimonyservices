const express = require('express');
const app = express();
const port = 5000;

const endpoints = require('./endpoints');

app.use('/', endpoints);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
