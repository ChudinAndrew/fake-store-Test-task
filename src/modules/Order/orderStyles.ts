import styled from "styled-components";

export const OrderWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-around;
  margin: 50px auto 0;
  -webkit-box-shadow: 3px 6px 12px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 6px 12px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 6px 12px -1px rgba(0, 0, 0, 0.75);
  .total-price {
    display: flex;
    justify-content: space-between;
  }
`;

export const OrderItems = styled.div`
  display: flex;
  height: 100px;
  align-items: center;

  width: 300px;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
  /* &:la */
  .trash {
    cursor: pointer;
    color: grey;
    padding-right: 10px;
    transition: color, transform 500ms ease;
  }
  .trash:hover{
    color:red;
    transform: scale(1.1);
}
  .item-price {
  }
  .order-image {
    justify-items: right;
    max-width: 50px;
    width: 100%;
    /* margin: 5px 100px 5px auto; */
  }
  .count-button {
    > button {
      border: 0;
      font-size: 20px;
      background-color: white;
      width: 50px;
      height: 50px;
      :hover {
        background-color: #ebf3f7;
      }
    }
  }
`;

// export const  = styled.div`
// display:flex;
// flex-direction:column;
// .formik{
//   display:flex;
//   flex-direction:column;
// }
// `
export const FormikWrapper = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  /* color:red; */
  /* align-items: center; */
  > p {
    margin: 0;
    color: red;
  }

  > input {
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  > label {
    margin: 10px 0;
  }
  > button {
    align-self: flex-end;
    margin: 10px 0;
    background-color: lightgreen;
    border: 1px solid gray;
    border-radius: 5px;
    transition: color, transform 500ms ease;
  }
  > button:hover {
    background-color: greenyellow;
    transform: scale(1.2);
  }
`;
export const ErrorMess = styled.p`
  color: red;
  font-size: 12px;
  line-height: 16px;
`;
