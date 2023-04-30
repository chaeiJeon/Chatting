import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 0px auto;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  > div {
    position: fixed;
  }
`;
type ItemContainerType = {
  isActive: boolean;
};
export const ItemContainer = styled.div<ItemContainerType>`
  width: 100%;
  top: ${({ isActive }) => (isActive ? 0 : "-200px")};
  transition: all 1s;
`;
export const Item = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffb824;
`;
export const UsernameInput = styled.input`
  background-color: transparent;
  border: none;
  color: #ffb824;
  border-bottom: #ffb824 1px solid;
  :focus {
    outline: none;
  }
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px transparent inset;
    -webkit-text-fill-color: #ffb824;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
type ButtonType = {
  backgroundColor: string;
  color: string;
  border?: string;
  fontWeight?: string;
  margin?: string;
};
export const Button = styled.button<ButtonType>`
  height: 25px;
  padding: 2px 10px 0;
  background-color: transparent;
  border-radius: 4px;
  font-size: 14px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border ?? "none"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  margin: ${({ margin }) => margin ?? "0px"};
`;
export const GrayButton = styled(Button)`
  background-color: lightgray;
  color: black;
`;
type TextType = {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
};
export const Text = styled.span<TextType>`
  color: ${({ color }) => color ?? "#ffb824"};
  font-size: ${({ fontSize }) => fontSize ?? "15px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
  text-align: center;
`;
