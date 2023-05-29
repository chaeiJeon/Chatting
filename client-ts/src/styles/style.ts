import styled from "styled-components";

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

type ButtonType = {
  backgroundColor?: string;
  color?: string;
  border?: string;
  fontWeight?: string;
  margin?: string;
  fontSize?: string;
};
export const Button = styled.button<ButtonType>`
  height: 25px;
  padding: 2px 10px 0;
  background-color: transparent;
  border-radius: 4px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
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
