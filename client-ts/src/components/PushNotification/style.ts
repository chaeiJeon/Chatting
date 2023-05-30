import styled from "styled-components";
import { Button as _Button } from "../../styles/style";
type ContainerType = {
  isActive: boolean;
};
export const Container = styled.div<ContainerType>`
  position: fixed;
  top: 10px;
  right: ${({ isActive }) => (isActive ? "10px" : "-230px")};
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
  border-radius: 10px;
  transition: all 1s;
`;
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 14px;
  color: rgb(255, 184, 36);
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`;
export const Button = styled(_Button)`
  flex: 1;
  font-weight: bold;
  color: white;
  font-size: 10px;
  :hover {
    font-size: 10.5px;
  }
`;
