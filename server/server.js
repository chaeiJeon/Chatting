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
_connect();

// api
const WebSockeetServer = require("./WebSocketServer.ts");
app.get("/open", (req, res) => {
  let { user } = req.body;
  setSender(user);
  _subscribe(channelName);
  WebSockeetServer(1234);
  res.send({ data: clients.length });
});
