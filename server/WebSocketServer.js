const { WebSocket, Server: WebSocketS } = require("ws");
const { _connect, _publish, _subscribe, setSender } = require("./redis");
const clients_websocket = require("./clients_websocket");
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
      clients_websocket.push(ws);
      console.log("Connected total:", clients_websocket.length);

      ws.on("message", (_message) => {
        _message = _message.toString();
        console.log("received message : ", _message);
        _publish(this.channelName, _message);
      });

      this.wss.on("close", function (error) {
        clients_websocket = new Set(
          Array.from(clients_websocket).filter((client) => client !== ws)
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
