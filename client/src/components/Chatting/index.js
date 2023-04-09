import React, { useEffect, useState } from "react";
import socket from "../../socket";
import {
  ChattingContainer,
  InputContainer,
  Input,
  SubmitButton,
} from "./style";

export const Chatting = () => {
  const [message, setMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const onMessage = () => {
    console.log(selectedUser);
    console.log(message);
    socket.emit("private message", {
      message,
      to: selectedUser,
    });
  };
  return (
    <>
      <ChattingContainer id="chatting">
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
