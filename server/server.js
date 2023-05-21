const express = require("express");
const cors = require("cors");
const clients = require("./clients");

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
const { _connect, _subscribe, setSender } = require("./redis");
let channelNum = 0;
let channelName = `channel:${channelNum}`;

// api
const WebSocketServer = require("./WebSocketServer.js");
app.post("/open", (req, res) => {
  let { user } = req.body;
  setSender(user);
  _subscribe(channelName);
  let webSocketServer = new WebSocketServer(1234, channelName);
  _connect();

  res.send({ data: clients.length });
});
