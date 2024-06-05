const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(cors({ origin: "*" }));

const server = http.createServer(app);

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET, POST"],
  },
});

app.listen(5000, () => {
  console.log("server start");
});
