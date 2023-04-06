const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  credential: true,
};
app.use(cors(corsOptions));

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit("users", users);
  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
  });
  // ...
});
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

httpServer.listen(port, () => {
  console.log(`socket.io server listening at http://localhost:${port}`);
});
