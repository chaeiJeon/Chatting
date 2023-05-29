import styled from "styled-components";
import { Button as _Button } from "../../styles/style";
export const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 15px;
  border-radius: 10px;
`;
export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
export const Contents = styled.div`
  font-size: 14px;
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
