const port = 5000;
const express = require("express");
const cors = require("cors");

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://matrimonyservices.org/'];

const corsOptions = {
  origin: allowedOrigins
};
const endpoints = require('./endpoints');
app.use(cors(corsOptions));



app.use('/',endpoints);


// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


