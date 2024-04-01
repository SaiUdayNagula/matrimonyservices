const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  const str = [
    {
      username: "thanda",
      password: "this my first message",
      username: "test user",
    },
  ];
  res.end(JSON.stringify(str));
});

router.get("/registerAccount", (req, res) => {
  res.end("in registerAccount");
});

module.exports = router;
