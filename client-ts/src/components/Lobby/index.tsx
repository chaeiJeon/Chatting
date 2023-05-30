import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { s_connect, s_send, webSocket } from "../../Socket/socket_client";

import { Text, Button } from "../../styles/style";
import { UserList, UserItem, UserIconWrapper } from "./style";
import Icon from "../Image/Icon";
type LobbyProps = {
  user: string;
  users: string[];
  setUsers: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentItemNum: React.Dispatch<React.SetStateAction<number>>;
  isActive_PN: boolean;
  setIsActive_PN: React.Dispatch<React.SetStateAction<boolean>>;
  setSender: React.Dispatch<React.SetStateAction<string>>;
};
export const Lobby = ({
  user,
  users,
  setUsers,
  setCurrentItemNum,
  isActive_PN,
  setIsActive_PN,
  setSender,
}: LobbyProps) => {
  const [selectedUser, setSelectedUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (webSocket == null) {
      s_connect();
    }
  }, []);
  useEffect(() => {
    if (webSocket) {
      webSocket.onmessage = (event) => {
        console.log("onmessage : ", event.data);
        const {
          action,
          sender = "",
          receiver = "",
          clients = [],
          currentTime,
        } = JSON.parse(event.data);
        switch (action) {
          case "addUser":
            setUsers(() => [...clients]);
            break;
          case "requestChat":
            if (receiver === user) {
              setIsActive_PN(true);
              setSender(sender);
            }
        }
      };
    }
  }, [webSocket, user]);
  const handleSubmit = () => {
    const currentTime = new Date();
    const message = JSON.stringify({
      action: "requestChat",
      sender: user,
      receiver: selectedUser,
      currentTime,
    });
    s_send(message);
  };
  return (
    <>
      <Text color="#a8a8a8">
        현재 접속중인 사용자는 {users.length - 1}명 입니다..
      </Text>
      <UserList>
        {users.map((_user, index) => {
          return (
            _user !== user && (
              <UserItem
                key={index}
                onClick={() => {
                  _user === selectedUser
                    ? setSelectedUser("")
                    : setSelectedUser(_user);
                }}
                isActive={_user === selectedUser}
              >
                <UserIconWrapper>
                  <Icon icon="User" width={15} height={10} />
                </UserIconWrapper>
                <Text fontWeight="bold" color="#a8a8a8">
                  {_user}
                </Text>
                <br />
              </UserItem>
            )
          );
        })}
      </UserList>
      {selectedUser === "" ? (
        <Text>매칭을 원하는 상대를 클릭해주세요</Text>
      ) : (
        <Text fontWeight="bold">{selectedUser}님과 바로 매칭하시겠습니까?</Text>
      )}
      <div>
        <Button
          backgroundColor="transparent"
          color="rgba(255,255,255,0.3)"
          border="1px solid rgba(255,255,255,0.3)"
          margin="0 7px 0 0"
          onClick={() => {
            setCurrentItemNum(0);
          }}
        >
          이전으로
        </Button>
        <Button
          backgroundColor="rgb(255, 184, 36)"
          color="black"
          fontWeight="bold"
          onClick={() => handleSubmit()}
        >
          요청하기
        </Button>
      </div>
    </>
  );
};
