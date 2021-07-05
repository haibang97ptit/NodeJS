const { Router } = require("express");
const express = require("express");
const { route } = require("./jobs");
const router = express.Router();

router.get("/home", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Home page",
  });
});

module.exports = router;
