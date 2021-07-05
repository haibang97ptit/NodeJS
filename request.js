const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "its all about object",
  });
});

app.listen(3000, () => {
  console.log("Server already stared !");
});
