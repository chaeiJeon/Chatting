const express = require("express");
const cors = require("cors");
const clients_websocket = require("./clients_websocket");
let clients = [];

const app = express();
const port_server = 8080;
const corsOptions = {
  origin: "*",
  credential: true,
};
app.use(express.json());
app.use(cors(corsOptions));
app.listen(port_server);

//redis
const { _connect, _publish, _subscribe, setSender } = require("./redis");
let channelNum = 0;
let channelName = `channel:${channelNum}`;

// api
const WebSocketServer = require("./WebSocketServer.js");
let webSocketServer = new WebSocketServer(1234, channelName);
_connect();
_subscribe(channelName);
app.post("/open", (req, res) => {
  let { user } = req.body;
  console.log(clients);
  setSender(user);
  clients.push(user);
  _publish(
    channelName,
    JSON.stringify({
      action: "addUser",
      name: user,
      clients: clients,
    })
  );
});
