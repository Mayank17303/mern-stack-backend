const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

var LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");

router.post("/", async (req, res) => {
  var url = localStorage.getItem("authUrl");
  console.log(url);
  console.log(req.body.user);
  console.log(req.body.pwd);
  console.log(req.bodu.ADMIN);
  if(req.body.user == process.env.ADMIN && req.body.pwd == process.env.PWD){
    console.log("Thay che match")
  }
  if(req.body.user ==- process.env.ADMIN && req.body.pwd == process.env.PWD){
    console.log("Thay che match with 3 equals")
  }
  if (req.body.user == process.env.ADMIN && req.body.pwd == process.env.PWD) {
    const refreshToken = jwt.sign(
      { adminname: req.body.user },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.json({ refreshToken, url });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
