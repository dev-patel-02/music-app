const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const port = process.env.PORT || 5000;
require("dotenv").config();

const Router = require("./routes/Routes.js");
const { connect } = require("./utils/dbConfig.js");
app.use(express.json());
connect();

app.use("/music", Router);

app.get("/", (req, res) => {
  res.send("Running Form backend");
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
