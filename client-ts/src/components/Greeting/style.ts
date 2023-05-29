import styled from "styled-components";
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
type WarningType = {
  isActive: boolean;
};
export const Warning = styled.div<WarningType>`
  opacity: ${({ isActive }) => (isActive ? "100%" : "0")};
  font-size: 12px;
  /* color: #ffb82490; */
  color: rgb(255 95 95 / 79%);
  padding: 10px 5px;
  transition: all 0.2s ease-in-out;
`;
