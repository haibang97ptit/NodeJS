const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" }); //set up config.env
const jobs = require("./route/jobs"); //import router
const cards = require("./route/cards");
const home = require("./route/home");
const connectDatabase = require("./config/database");

connectDatabase();
app.use(express.json());

// app.use(jobs, cards, home);
app.use("/api/v1", jobs, cards, home);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
