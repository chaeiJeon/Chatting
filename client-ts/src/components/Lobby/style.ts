import styled from "styled-components";
export const UserList = styled.div`
  width: 200px;
  height: 200px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 5px;
`;
type UserItemType = {
  isActive?: boolean;
};
export const UserItem = styled.div<UserItemType>`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 7px 10px;
  border-radius: 5px;
  background-color: ${({ isActive }) => isActive && "rgba(255, 255, 255, 0.3)"};
  cursor: pointer;
  :hover {
    background-color: ${({ isActive }) =>
      !isActive && "rgba(255, 255, 255, 0.1)"};
  }
`;
export const UserIconWrapper = styled.div<{ backgroundColor?: string }>`
  width: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
  padding: 5px 0px;
  border-radius: 5px;
`;
