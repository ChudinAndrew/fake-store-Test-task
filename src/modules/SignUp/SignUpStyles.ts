import styled from "styled-components";

export const SignUpWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(243 244 246);
  .form {
    background-color: white;
    width: 30%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 4px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
    padding-bottom: 32px;
  }
  .btnreg {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > button {
      background-color: lightblue;
      color: white-space;
      padding: 8 16;
      border-radius: 4px;
      :hover {
        background-color: blue;
      }
    }
  }
`;
export const InputWrapper = styled.div`
  margin-bottom: 16px;
  .label {
    display: block;
    color: grey;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
  .border {
    border: 1px solid red;
  }
  .none {
  }
  .input {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    appearance: none;
    border-width: 1px;
    border-radius: 4px;
    width: 95%;
    padding: 8px 12px;
    color: grey;
    line-height: 1.25;
  }
  .error-message {
    color: red;
    font-size: 12px;
    line-height: 16px;
  }
`;
