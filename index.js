const express = require("express");
require("dotenv").config();
const { router } = require("./router");

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use("/api/posts", router);
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log("Start server!");
});

const controller = "";
