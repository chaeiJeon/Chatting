import { useState } from "react";
import { Reset } from "styled-reset";
import { Greeting } from "./components/Greeting";
import { Chatting } from "./components/Chatting";
import { GlobalStyle } from "./reset";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <GlobalStyle />
      <Reset />
      <Greeting user={user} setUser={setUser} />
      <Chatting user={user} />
    </div>
  );
}

export default App;
