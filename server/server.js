const http = require("http");
const express = require("express");
const cors = require("cors");
const WebSocketS = require("ws").Server;
const clients = require("./clients");

const app = express();
const port = 8080;
const corsOptions = {
  origin: "*",
  credential: true,
};
app.use(cors(corsOptions));

//redis
const channelName = "chatroom1";
const { _connect, _publish, _subscribe } = require("./redis");

_connect();
_publish(channelName, "publish message");
_subscribe(channelName);
//

const httpServer = require("http").createServer(app);

//socket

socketPort = 1234;
wss = null;
wss = new WebSocketS({ port: socketPort }); // 내가 설정한 port로 websocket 서버를 연다
wss.on("connection", (ws, req) => {
  clients.push(ws);
  console.log("Connected total:", clients.length);

  ws.on("message", (_message) => {
    _message = _message.toString();
    _publish(channelName, _message);
    for (const client of clients) {
      client.send(_message);
    }
  });
});
//
httpServer.listen(port, () => {
  console.log(`socket.io server listening at http://localhost:${port}`);
});
wss.on("close", function (error) {
  console.log("websever close", error);
});
wss.on("error", function (error) {
  console.log(error);
});
