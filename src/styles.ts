import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 0;
  color: black;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  margin: 10px auto;
  width: 800px;
`;
export const AppWrpapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;
export const HeaderBar = styled.div`
  font-family: auto;
  padding: 20px;
  background-color: grey;
  color: white;
  display: flex;
  align-items: baseline;
  .logo {
    color: darkred;
    border: 3px solid white;
    padding: 5px;
  }
  .link {
    padding-right: 8px;
    padding-left: 8px;
    color: white;
  }
  .active {
    color: black;
  }
`;

export const ProductsWrapper = styled.div`
  /* width: 1170px; */
  height: 100%;
  /* border: 1px solid grey; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px auto;
`;
export const ImageWrapper = styled.div`
  > img {
    height: 50px;
  }
`;
export const PostProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid lightblue;
  border-radius: 25px;
  width: calc(25% - 10px);
  flex: 0 0 calc(25% - 15px);
  height: 150px;
  /* background-color: tomato; */
  margin: 5px;
  .btn {
    background-color: lightgreen;
    width: 50px;
    align-self: flex-end;
    margin-right: 25px;
    border-radius: 5px;
    border: 2px solid lightblue;
    padding: 3px;
  }
`;
export const ListPageProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
`;
export const NavBarProduct = styled.div`
  background-color: lightblue;
`;

export const ProductPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
  text-align: left;
`;
export const ProductInfoS = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .small {
    height: 200px;
    cursor: pointer;
    border: 1px solid #fff;
  }

  .info-product {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 800px;
    height: 200px;
    border: 1px solid lightgreen;
    margin-left: 50px;

    > div {
      margin-bottom: 15px;
      margin-left: 35px;
    }
    > button {
      background-color: lightgreen;
      width: 50px;
      align-self: flex-end;
      margin-right: 25px;
      border-radius: 5px;
      border: 0;
      padding: 5px;
      position:absolute;
    }
  }
`;
