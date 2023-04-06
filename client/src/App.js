import React, { useState, useEffect } from "react";
import socket from "./socket";
function App() {
  const [username, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUsername = event.target.elements.username.value;
    setUserName(newUsername);
    socket.auth = { username };
    console.log(socket.auth);

    socket.connect();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="name" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
