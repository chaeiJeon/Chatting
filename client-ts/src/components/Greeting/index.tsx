import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import {
  GreetingContainer,
  GreetingText,
  UsernameInput,
  SubmitButton,
} from "./style";
type GreetingType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
export const Greeting = ({ user, setUser }: GreetingType) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("user : ", user);
    fetch(`${API_URL}/username`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res["data"]);
        return;
      });
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
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
          {/* <Link to="chatting" spy={true} smooth={true}> */}
          <SubmitButton type="submit">submit</SubmitButton>
          {/* </Link> */}
        </form>
        <div>{}</div>
      </GreetingContainer>
    </>
  );
};
