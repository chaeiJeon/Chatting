import styled from "styled-components";
export const ChattingContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  flex-direction: column;
  gap: 15px;
  background-color: black;
  overflow: hidden;
  justify-content: end;
    padding: 20px 0px;

  position: fixed;
  height: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
export const MessageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: end;
  gap: 6px;
  color: white;
`;
type WrapMessageType = {
  type: "send" | "receive";
};
export const WrapMessage = styled.div<WrapMessageType>`
  width: 100%;
  text-align: ${({ type }) => (type === "send" ? "right" : "left")};
`;
type MessageType = {
  type: "send" | "receive";
};
export const Message = styled.div<MessageType>`
  display: inline-block;
  color: black;
  background-color: ${({ type }) =>
    type === "send" ? "white" : "rgb(255, 184, 36)"};
  padding: 7px 10px;
  border-radius: 5px;
`;
export const ReceiverName = styled.div`
  padding: 0 0 5px 1px;
`
export const InputContainer = styled.div`
  display: flex;
  gap: 7px;
`;
export const Input = styled.input`
  height: 30px;
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
  height: 32px;
  font-size: 12px;
  font-weight: bold;
`;