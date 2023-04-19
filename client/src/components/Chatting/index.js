import React, { useEffect, useState } from "react";
import { webSocket, s_send } from "../../socket";
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
  useEffect(() => {
    webSocket.onmessage = (event) => {
      console.log("eeve! ", event.data);
      let _m = event.data;
      for (let value of JSON.parse(event.data)) {
        const { sender, recipient, message } = JSON.parse(value);
        console.log(sender, " > ", recipient, " : ", message);
      }
      //   setMessage(_m);
    };
  }, [webSocket]);
  const onMessage = () => {
    s_send(message);
  };
  const random = () => {
    console.log("in random ", userL);
    setSelectedUser(userL[1]);
  };
  return (
    <>
      <ChattingContainer id="chatting">
        {message}
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
