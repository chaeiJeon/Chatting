import React, { useEffect, useState } from "react";
import socket from "../../socket";
import {
  ChattingContainer,
  InputContainer,
  Input,
  SubmitButton,
} from "./style";

export const Chatting = ({ userL }) => {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const onMessage = () => {
    console.log(selectedUser);
    console.log(message);
    socket.emit("private message", {
      message,
      to: selectedUser.userID,
    });
  };
  const random = () => {
    console.log("in random ", userL);
    setSelectedUser(userL[1]);
  };
  return (
    <>
      <ChattingContainer id="chatting">
        <button onClick={random}>랜덤 선택 시작</button>
        <InputContainer>
          <Input
            name="message"
            onChange={(event) => handleChangeMessage(event)}
          />
          <SubmitButton type="submit" onClick={onMessage}>
            submit
          </SubmitButton>
        </InputContainer>
      </ChattingContainer>
    </>
  );
};
