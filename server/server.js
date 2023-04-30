const http = require("http");
const express = require("express");
const cors = require("cors");
const WebSocketS = require("ws").Server;
const clients = require("./clients");
const uniqueIps = [];

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  credential: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.listen(port);

//redis
const channelName = "chatroom1";
const { _connect, _publish, _subscribe, setSender } = require("./redis");

_connect();
_subscribe(channelName);

//socket
socketPort = 1234;
wss = null;
wss = new WebSocketS({ port: socketPort }); // 내가 설정한 port로 websocket 서버를 연다
wss.on("connection", (ws, req) => {
  const ip = req.socket.remoteAddress;
  console.log(ip);
  if (uniqueIps.includes(ip)) {
    ws.close();
    console.log(`Duplicate connection attempt from ${ip}, connection closed.`);
    return;
  }
  uniqueIps.push(ip);
  clients.push(ws);
  console.log("Connected total:", clients.length);

  ws.on("message", (_message) => {
    _message = _message.toString();
    console.log("received message : ", _message);
    _publish(channelName, _message);
  });
});
wss.on("close", function (error) {
  clients = clients.filter((client) => client !== ws);
  console.log("websever close", error);
});
wss.on("error", function (error) {
  console.log(error);
});

//api
app.post("/username", (req, res) => {
  let { user } = req.body;
  setSender(user);
  res.send({ data: clients.length });
});
