import { useState } from "react";
import { Greeting } from "../Greeting";
import { Lobby } from "../Lobby";
import { MainContainer, ItemContainer, Item } from "./style";

type MainProps = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};
export const Main = ({ user, setUser }: MainProps) => {
  const [users, setUsers] = useState<string[]>([]);
  const [currentItemNum, setCurrentItemNum] = useState(0);
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
            />
          </Item>
        </ItemContainer>
      </MainContainer>
    </>
  );
};
