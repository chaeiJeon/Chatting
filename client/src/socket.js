import { io, Socket } from "socket.io-client";

const URL = "http://localhost:8080";
const socket = io(URL, { autoConnect: false });
export let userList;

socket.onAny((event, ...args) => {
  console.log(event, args);
});
socket.on("connect_error", (err) => {
  if (err.message === "invalid username") {
    console.log("invalid username");
  }
});
socket.on("users", (users) => {
  users.forEach((user) => {
    user.self = user.userID === socket.id;
  });
  userList = users.sort((a, b) => {
    if (a.self) return -1;
    if (b.self) return 1;
    if (a.username < b.username) return -1;
    return a.username > b.username ? 1 : 0;
  });
});
socket.on("user connected", (user) => {
  userList.push(user);
  console.log("userconnected!~");
  console.log(userList);
});
socket.on("private message", ({ message, from }) => {
  console.log(message, from);
});
export default socket;
