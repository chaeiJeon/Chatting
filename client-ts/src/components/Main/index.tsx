import { useEffect, useState } from "react";
import { Greeting } from "../Greeting";
import { Lobby } from "../Lobby";
import PushNotification from "../PushNotification";
import { MainContainer, ItemContainer, Item } from "./style";

type MainProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
export type PushNotificiatonForm = {
  isActive: boolean;
  sender: string;
} & (
  | {
      type: "alert";
      alertResponse: "accept" | "reject";
    }
  | {
      type: "choice";
    }
);
export const Main = ({ user, setUser }: MainProps) => {
  const [users, setUsers] = useState<string[]>([]);
  const [currentItemNum, setCurrentItemNum] = useState(0);
  const [pushNotificationForm, setPushNotificationForm] =
    useState<PushNotificiatonForm>({
      sender: "",
      type: "choice",
      isActive: false,
    });
  //주스탠드 리코일로 전역관리 해보기
  return (
    <>
      <MainContainer>
        <ItemContainer isActive={currentItemNum === 0}>
          <Item>
            <Greeting
              user={user}
              setUser={setUser}
              users={users}
              setCurrentItemNum={setCurrentItemNum}
            />
          </Item>
          <Item>
            <Lobby
              user={user}
              users={users}
              setUsers={setUsers}
              setCurrentItemNum={setCurrentItemNum}
              setPushNotificationForm={setPushNotificationForm}
            />
          </Item>
        </ItemContainer>
      </MainContainer>
      <PushNotification form={pushNotificationForm} user={user} />
    </>
  );
};
