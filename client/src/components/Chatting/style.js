import styled from "styled-components";
export const ChattingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: black;
  overflow: hidden;
  justify-content: end;
  padding: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  gap: 7px;
`;
export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #ffb824;
  border: #ffb824 1px solid;
  border-radius: 4px;
  flex: 1;
  font-size: 12px;
  padding: 0 7px;
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
  background-color: rgb(255, 184, 36);
  border: none;
  border-radius: 4px;
  color: black;
  width: 70px;
  height: 25px;
  font-size: 12px;
  padding-top: 3px;
  font-weight: bold;
`;
