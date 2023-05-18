import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/api";

import {
  ItemContainer,
  Item,
  UsernameInput,
  Button,
  MainContainer,
  Text,
} from "./style";
type GreetingType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
export const Greeting = ({ user, setUser }: GreetingType) => {
  const [currentItemNum, setCurrentItemNum] = useState(0);
  const [usersNumber, setUsersNumber] = useState(0);
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("user : ", user);
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
        setUsersNumber(res.data);
        return;
      });
    setCurrentItemNum(1);
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  return (
    <>
      <MainContainer>
        <ItemContainer isActive={0 == currentItemNum}>
          <Item>
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
            </form>
          </Item>
          <Item>
            <Text color="#a8a8a8">
              현재 접속중인 사용자는 {usersNumber}명 입니다..
            </Text>
            <Text fontWeight="bold">바로 매칭하시겠습니까?</Text>
            <div>
              <Button
                backgroundColor="transparent"
                color="rgb(255, 184, 36)"
                border="1px solid rgb(255, 184, 36)"
                margin="0 7px 0 0"
                onClick={() => {
                  setCurrentItemNum(0);
                }}
              >
                이전으로
              </Button>
              <Button
                backgroundColor="rgb(255, 184, 36)"
                color="black"
                fontWeight="bold"
                onClick={() => navigate("/chat")}
              >
                바로 접속
              </Button>
            </div>
          </Item>
        </ItemContainer>
      </MainContainer>
    </>
  );
};
