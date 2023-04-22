import styled from "styled-components";

export const GreetingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: black;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;
export const GreetingText = styled.div`
  font-weight: bolder;
  color: #ffb824;
  font-size: 30px;
  text-align: center;
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
export const SubmitButton = styled.button`
  background-color: transparent;
  border: 1px solid rgb(255, 184, 36);
  border-radius: 4px;
  color: rgb(255, 184, 36);
  width: 70px;
  height: 25px;
  padding-top: 3px;
  margin-left: 7px;
`;
