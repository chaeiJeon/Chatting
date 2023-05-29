const clients_websocket = require("./clients_websocket.js");

const redis = require("redis");
const config = {
  socket: {
    port: 6379,
    host: "localhost",
  },
};
const publisher = redis.createClient(config);
const subscriber = redis.createClient(config);
const subscriber_1 = subscriber.duplicate();
const redisClient = redis.createClient(config); //store chat history
let sender = "";
let receiver = "";

const setSender = (name) => {
  sender = name;
};
const setReceiver = (name) => {
  receiver = name;
};
const _connect = async () => {
  await publisher.connect();
  await subscriber_1.connect();
  await redisClient.connect();
};
const _publish = async (channel, message) => {
  await publisher.publish(channel, message);
};
const _subscribe = async (channelName) => {
  await subscriber_1.subscribe(channelName, async (_message) => {
    _pushMessageHistory(_message, channelName); //history에 메시지 push
    console.log("sub message : ", _message);
    for (const client of clients_websocket) {
      client.send(_message);
    }
    // sendMessageClient(channelName); //client에 메시지 history 전달
  });
};
const _pushMessageHistory = async (message, channelName) => {
  await redisClient.lPush(channelName, message, (err) => {
    if (err) {
      console.error("error saving message to chat history: ", err);
    }
  });
};
const sendMessageClient = async (channelName) => {
  messageHistory = await redisClient.lRange(channelName, 0, -1);
  messageHistory = JSON.stringify(messageHistory);
  for (const client of clients_websocket) {
    client.send(messageHistory);
  }
};
module.exports = {
  setSender,
  setReceiver,
  _connect,
  _publish,
  _subscribe,
};
