const express = require("express");

require("dotenv").config();
const { router } = require("./router");
const { connectMongo } = require("./db/connection");

const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use("/api/posts", router);
app.use(express.static("./public"));
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

async function start() {
  await connectMongo();
  app.listen(PORT, () => {
    console.log("Start server!");
  });
}

start();
