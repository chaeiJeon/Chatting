import { Button } from "./style";
import { Container, Title, Contents, ButtonContainer } from "./style";
import { Text } from "../../styles/style";
import { s_send } from "../../Socket/socket_client";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";

type PushNotificationProps = {
  user: string;
  sender: string;
  isActive: boolean;
};
const PushNotification = ({
  user,
  sender,
  isActive,
}: PushNotificationProps) => {
  const navigate = useNavigate();
  let message = "";
  const currentTime = new Date();
  const handleButton = (action: string) => {
    message = JSON.stringify({
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
    <Container isActive={isActive}>
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
        <Button backgroundColor="black" onClick={() => handleButton("reject")}>
          거절
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default PushNotification;
