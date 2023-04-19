import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import { Greeting } from "./components/Greeting";
import { Chatting } from "./components/Chatting";
import { GlobalStyle } from "./reset";
function App() {
  const [userL, setUserL] = useState([]);

  return (
    <div>
      <GlobalStyle />
      <Reset />
      <Greeting />
      <Chatting userL={userL} />
    </div>
  );
}

export default App;
