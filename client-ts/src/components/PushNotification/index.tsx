import { Button } from "./style";
import { Container, Title, Contents, ButtonContainer } from "./style";
import { Text } from "../../styles/style";

type PushNotificationProps = {
  sender?: string;
  isActive: boolean;
};
const PushNotification = ({ sender, isActive }: PushNotificationProps) => {
  return (
    <Container isActive={isActive}>
      <Title>채팅 요청</Title>
      <Contents>
        <Text fontSize="13px" fontWeight="bold" color="rgb(255, 184, 36)">
          {sender}님의 채팅 요청
        </Text>
      </Contents>
      <ButtonContainer>
        <Button backgroundColor="#00b000">수락</Button>
        <Button backgroundColor="red">거절</Button>
      </ButtonContainer>
    </Container>
  );
};
export default PushNotification;
