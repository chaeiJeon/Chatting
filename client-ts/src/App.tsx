import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import { Greeting } from "./components/Greeting";
import { Chatting } from "./components/Chatting";
import { GlobalStyle } from "./reset";
import { Main } from "./components/Main";

function App() {
  const [user, setUser] = useState("");
  return (
    <div>
      <GlobalStyle />
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Main user={user} setUser={setUser} />} />
          <Route path="/chat" element={<Chatting user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
