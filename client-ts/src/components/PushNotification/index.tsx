import { Button } from "./style";
import { Container, Title, Contents, ButtonContainer } from "./style";
import { Text } from "../../styles/style";
import { s_send } from "../../Socket/socket_client";
import { useNavigate } from "react-router-dom";
import { PushNotificiatonForm } from "../Main";
import { useEffect, useState } from "react";

type PushNotificationProps = {
  form: PushNotificiatonForm;
  user: string;
};
const PushNotification = ({ form, user }: PushNotificationProps) => {
  const navigate = useNavigate();
  const currentTime = new Date();
  const { sender, isActive, type } = form;
  const alertResponse = type === "alert" ? form.alertResponse : "";
  const [isActiveState, setIsActiveState] = useState(isActive);

  useEffect(() => {
    setIsActiveState(isActive);
    if (type === "alert") {
      const timeout = setTimeout(() => {
        setIsActiveState(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [form]);

  const handleButton = (action: string) => {
    const message = JSON.stringify({
      action: action + "Chat",
      sender: user,
      receiver: sender,
      currentTime,
    });
    s_send(message);
    if (action === "accept") {
      navigate("/chat");
    }
  };

  return (
    <Container isActive={isActiveState}>
      {type === "choice" && (
        <>
          <Title>채팅 요청</Title>
          <Contents>
            <Text fontSize="13px" fontWeight="bold" color="rgb(255, 184, 36)">
              {sender}
            </Text>
            <Text fontSize="13px" fontWeight="bold" color="black">
              님의 채팅 요청
            </Text>
          </Contents>
          <ButtonContainer>
            <Button
              backgroundColor="rgb(255, 172, 0)"
              onClick={() => handleButton("accept")}
            >
              수락
            </Button>
            <Button
              backgroundColor="black"
              onClick={() => handleButton("reject")}
            >
              거절
            </Button>
          </ButtonContainer>
        </>
      )}
      {type === "alert" && (
        <>
          <Title>알림</Title>
          <Contents>
            <Text fontSize="13px" fontWeight="bold" color="rgb(255, 184, 36)">
              {sender}
            </Text>
            <Text fontSize="13px" fontWeight="bold" color="black">
              님이 채팅을{" "}
              {alertResponse === "accept" ? "수락하셨습니다" : "거절하셨습니다"}
            </Text>
          </Contents>
        </>
      )}{" "}
    </Container>
  );
};
export default PushNotification;
