import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import { UsernameInput, Warning } from "./style";
import { Text, Button } from "../../styles/style";

type GreetingProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  users: string[];
  setCurrentItemNum: React.Dispatch<React.SetStateAction<number>>;
};
export const Greeting = ({
  user,
  setUser,
  users,
  setCurrentItemNum,
}: GreetingProps) => {
  const [isActive_w, setIsActive_w] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (users.find((_user) => _user === user)) {
      setIsActive_w(true);
      return;
    }
    fetch(`${API_URL}/open`, {
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
        console.log(res.data);

        return;
      });
    setCurrentItemNum(1);
    setIsActive_w(false);
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
    setIsActive_w(false);
  };
  return (
    <>
      <Text fontSize="30px" fontWeight="bolder">
        Welcome
        <br />
        Enter your name!
      </Text>
      <form onSubmit={handleSubmit} autoComplete="off">
        <UsernameInput
          type="text"
          onChange={(event) => handleChangeInput(event)}
          autoComplete="off"
          value={user}
        />
        <Button
          backgroundColor="transparent"
          color="rgb(255, 184, 36)"
          border="1px solid rgb(255, 184, 36)"
          margin="0 0 0 7px"
          type="submit"
        >
          입력
        </Button>
        <Warning isActive={isActive_w}>이미 존재하는 이름입니다.</Warning>
      </form>
    </>
  );
};
