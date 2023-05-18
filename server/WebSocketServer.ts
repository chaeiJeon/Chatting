import { WebSocket, Server as WebSocketS } from "ws";
import { _connect, _publish, _subscribe, setSender } from "./redis";
const uniqueIps = [];
let wss = null;

class WebSocketServer {
  private port: number;
  private wss: WebSocketS;
  private clients: WebSocket[];
  private channelName: string;

  constructor(port) {
    this.port = port;
    this.wss = new WebSocketS({ port: this.port }); // 내가 설정한 port로 websocket 서버를 연다
    this.clients = [];
    this.channelName = "channel1";
    this.init();
  }
  init() {
    this.wss.on("connection", (ws, req) => {
      // const ip = req.socket.remoteAddress;
      // console.log(ip);
      // if (uniqueIps.includes(ip)) {
      //   ws.close();
      //   console.log(`Duplicate connection attempt from ${ip}, connection closed.`);
      //   return;
      // }
      // uniqueIps.push(ip);
      this.clients.push(ws);
      console.log("Connected total:", this.clients.length);

      ws.on("message", (_message: string) => {
        _message = _message.toString();
        console.log("received message : ", _message);
        _publish(this.channelName, _message);
      });
      this.wss.on("close", function (error) {
        this.clients = new Set(
          Array.from(this.clients).filter((client) => client !== ws)
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
