import { Button } from "./style";
import { Container, Title, Contents, ButtonContainer } from "./style";

type PushNotificationProps = {
  sender?: string;
};
const PushNotification = ({ sender }: PushNotificationProps) => {
  return (
    <Container>
      <Title>채팅 요청</Title>
      <Contents>{sender}님의 채팅 요청</Contents>
      <ButtonContainer>
        <Button backgroundColor="#00b000">수락</Button>
        <Button backgroundColor="red">거절</Button>
      </ButtonContainer>
    </Container>
  );
};
export default PushNotification;
