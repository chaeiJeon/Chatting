import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import socket from "../../socket";
import {
  GreetingContainer,
  GreetingText,
  UsernameInput,
  SubmitButton,
} from "./style";

export const Greeting = () => {
  const [username, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    socket.auth = { username };

    socket.connect();
  };
  const handleChangeInput = (event) => {
    setUserName(event.target.value);
  };
  return (
    <>
      <GreetingContainer>
        <GreetingText>
          Welcome
          <br />
          Enter your name!
        </GreetingText>
        <form onSubmit={handleSubmit} autoComplete="off">
          <UsernameInput
            type="text"
            name="username"
            onChange={(event) => handleChangeInput(event)}
            autoComplete="off"
          />
          <Link to="chatting" spy={true} smooth={true}>
            <SubmitButton type="submit">submit</SubmitButton>
          </Link>
        </form>
      </GreetingContainer>
    </>
  );
};
