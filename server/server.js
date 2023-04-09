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
    origin: "*",
    credential: true,
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
  socket.on("private message", ({ message, to }) => {
    console.log(message, "=>", to);
    socket.to(to).emit("private message", {
      message,
      from: socket.id,
    });
  });
  socket.on("disconnect", () => {
    console.log("disconnect ");
    users.forEach((user) => {
      if (user.self) {
        user.connected = false;
      }
    });
  });
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
