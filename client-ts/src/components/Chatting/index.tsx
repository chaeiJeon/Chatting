import React, { useEffect, useState } from "react";
import { webSocket, s_send } from "../../Socket/socket_client";
import {
  ChattingContainer,
  InputContainer,
  Input,
  SubmitButton,
  MessageContainer,
  SentMessage,
} from "./style";

type ChattingType = {
  user: string;
};
type MessageType = {
  sender: string;
  receiver: string;
  contents: string;
};
export const Chatting = ({ user }: ChattingType) => {
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [selectedUser, setSelectedUser] = useState({});
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    webSocket.onmessage = (event) => {
      console.log("onmessage : ", event.data);
      setMessageList((prev) => [...prev, JSON.parse(event.data)]);
      // console.log(messageList[0].contents);
      //   let _m = event.data;
      //   for (let value of JSON.parse(event.data)) {
      //     const { sender, recipient, message } = JSON.parse(value);
      //     console.log(sender, " > ", recipient, " : ", message);
      //   }
      //   setMessage(_m);
    };
  }, [webSocket, messageList]);
  const sendMessage = () => {
    s_send(input);
    setInput("");
  };
  return (
    <>
      <ChattingContainer id="chatting">
        <MessageContainer>
          {messageList.map(({ sender, receiver, contents }) => (
            <SentMessage>
              {sender} {">"} {receiver} {">"} {contents}
            </SentMessage>
          ))}
        </MessageContainer>
        <InputContainer>
          <Input name="input" onChange={(event) => handleChangeInput(event)} />
          <SubmitButton type="submit" onClick={sendMessage}>
            submit
          </SubmitButton>
        </InputContainer>
      </ChattingContainer>
    </>
  );
};
