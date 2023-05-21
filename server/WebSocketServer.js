const { WebSocket, Server: WebSocketS } = require("ws");
const { _connect, _publish, _subscribe, setSender } = require("./redis");
const clients = require("./clients");
const uniqueIps = [];
let wss = null;

class WebSocketServer {
  constructor(port, channelName) {
    console.log("cons");
    this.port = port;
    this.wss = new WebSocketS({ port: this.port });
    this.channelName = channelName;
    this.init();
  }
  init() {
    this.wss.on("connection", (ws, req) => {
      clients.push(ws);
      console.log("Connected total:", clients.length);

      ws.on("message", (_message) => {
        _message = _message.toString();
        console.log("received message : ", _message);
        _publish(this.channelName, _message);
      });

      this.wss.on("close", function (error) {
        clients = new Set(
          Array.from(clients).filter((client) => client !== ws)
        );
        console.log("websever close", error);
      });

      this.wss.on("error", function (error) {
        console.log(error);
      });
    });
  }
}

module.exports = WebSocketServer;
