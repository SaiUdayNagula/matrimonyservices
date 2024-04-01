const express = require("express");
const bodyParser = require("body-parser");
const routehandler = require("./routes/handler.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routehandler);

const PORT = 4000; //backend routing
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
