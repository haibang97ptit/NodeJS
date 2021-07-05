const express = require("express");
const router = express.Router();

router.get("/cards", (req, res) => {
  res.status(200).json({
    success: true,
    message: "this place is display shopping cards",
  });
});

module.exports = router;
