import React, { useEffect, useState } from "react";
import { webSocket, s_send } from "../../Socket/socket_client";
import {
  ChattingContainer,
  InputContainer,
  Input,
  SubmitButton,
  MessageContainer,
  Message,
  WrapMessage,
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
  const [receiver, setReceiver] = useState("saho");
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    webSocket.onmessage = (event) => {
      console.log("onmessage : ", event.data);
      setMessageList((prev) => [...prev, JSON.parse(event.data)]);
    };
  }, [webSocket, messageList]);
  const sendMessage = () => {
    if (input === "") {
      return;
    }
    const message = setMessageFormat({
      sender: user,
      receiver,
      contents: input,
    });
    setInput("");

    s_send(message);
  };
  const setMessageFormat = ({ sender, receiver, contents }: MessageType) => {
    const currentTime = new Date();
    const result = JSON.stringify({
      sender,
      receiver,
      contents,
      currentTime,
    });
    return result;
  };
  return (
    <>
      <ChattingContainer id="chatting">
        <MessageContainer>
          {messageList.map(({ sender, receiver, contents }) =>
            user === sender ? (
              <WrapMessage type="send">
                <Message type="send">{contents}</Message>
              </WrapMessage>
            ) : (
              <WrapMessage type="receive">
                {receiver}
                <br />
                <Message type="receive">{contents}</Message>
              </WrapMessage>
            )
          )}
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
