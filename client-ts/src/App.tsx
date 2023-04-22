import { useState } from "react";
import { Reset } from "styled-reset";
import { Greeting } from "./components/Greeting";
import { Chatting } from "./components/Chatting";
import { GlobalStyle } from "./reset";

function App() {
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
