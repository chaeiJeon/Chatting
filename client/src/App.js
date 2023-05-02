import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import { Greeting } from "./components/Greeting";
import { Chatting } from "./components/Chatting";
import socket from "./socket";
import { userList } from "./socket";
import { GlobalStyle } from "./reset";
function App() {
  const [userL, setUserL] = useState([]);
  socket.on("users", (users) => {
    console.log(users);
    setUserL(users);
  });

  return (
    <div>
      <GlobalStyle />
      <Reset />
      <Greeting />
      <Chatting />
    </div>
  );
}

export default App;
