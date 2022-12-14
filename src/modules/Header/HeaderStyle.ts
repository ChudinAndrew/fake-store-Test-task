import styled from "styled-components";

export const OrderButton = styled.button`
  background-color: grey;
  float: right;
  margin-right:65px;
  margin-bottom:5px;
  cursor: pointer;
  transition: color, transform 500ms ease;
  :hover {
    color: red;
    transform: scale(1.1);
  }
`;
