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
  .shop-cart-button {
  }
  .btn-wrapper {
    flex-direction: flex-end;
  }
`;
export const ShopButton = styled.div`
  padding: 20px;
  background-color: grey;
  display: flex;
  justify-content: end;
  .shop-btn {
    cursor: pointer;
    transition: color, transform 500ms ease;
  }
  .shop-btn:hover,
  .shop-btn.active {
    color: red;
    transform: scale(1.5);
  }
`;
export const HeaderWrapper = styled.div`
  align-items: baseline;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  position: relative;
  .cart-shop {
    position: absolute;
    top: 75px;
    right: 20px;
    width: 450px;
    min-height: 100px;
    background: white;
    z-index: 999999;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    .total-price{
      display:flex;
      justify-content:space-between;
      padding:8px 65px;
      padding-bottom:20px;
      font-size:20px;
      
    }
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
  border: 1px solid lightgray;
  border-radius: 25px;
  width: calc(25% - 10px);
  flex: 0 0 calc(25% - 15px);
  height: 150px;
  text-align: center;
  /* background-color: tomato; */
  margin: 5px;
  -webkit-box-shadow: 4px 4px 15px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 4px 15px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 4px 15px -3px rgba(0, 0, 0, 0.75);

  .btn {
    background-color: lightgreen;
    width: 80px;
    font-size: small;
    align-self: flex-end;
    margin-right: 25px;
    border-radius: 5px;
    border: 2px solid lightblue;
    padding: 3px;
    z-index: 999999;
    cursor: pointer;
    -webkit-box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    transition: color, transform 500ms ease;
  }
  .buttons{
    align-items:flex-end;
  }
  .btn:hover {
        background-color: red;
        transform: scale(1.2);
      }
      .btn-buy {
        background-color: lightgreen;
    width: 80px;
    font-size: small;
    align-self: flex-end;
    margin-right: 25px;
    border-radius: 5px;
    border: 2px solid lightblue;
    padding: 3px;
    z-index: 999999;
    cursor: pointer;
    -webkit-box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    transition: color, transform 500ms ease;
        
      }
      .btn-buy:hover {
        background-color: red;
        transform: scale(1.2);
      }
`;
export const ListPageProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
`;
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: darkgray;
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
  border-radius: 25px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

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
    height: auto;
    /* border: 1px solid lightblue; */
    margin-left: 50px;
    padding: 10px;

    > div {
      /* margin-bottom: 15px; */
      /* margin-left: 35px; */
      margin: 15px;
    }
    .price-and-button {
      align-self: flex-end;

      .btn-buy {
        z-index:9999;
        background-color: lightgreen;
        width: 50px;
        align-self: flex-end;
        margin-right: 25px;
        margin-left: 5px;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
        margin-bottom: 5px;
        transition: color, transform 500ms ease;
      }
      .btn-buy:hover {
        background-color: red;
        transform: scale(1.2);
      }
    }
  }
`;
