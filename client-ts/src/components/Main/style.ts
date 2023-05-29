import styled from "styled-components";
export const MainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

type ItemContainerType = {
  isActive?: boolean;
};
export const ItemContainer = styled.div<ItemContainerType>`
  width: 100%;
  height: 100%;
  position: fixed;
  left: ${({ isActive }) => (isActive ? 0 : "-500px")};
  display: flex;
  transition: all 1s;
`;
export const Item = styled.div`
  display: flex;
  min-width: 500px;
  height: 100%;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffb824;
`;
