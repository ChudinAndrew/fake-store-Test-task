import { FC, useEffect, useState } from "react";
import { HeaderBar, HeaderWrapper, ShopButton } from "../../styles";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect, useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import Cart from "../Cart/Cart";
import { number } from "yup";
// import { Route } from 'react-router'

// interface ICartList {
//   title: string;
//   image: string;
//   price: number;
//   id: number;
// }
const Header: FC = () => {
  let [cartOpen, setCartOpen] = useState(false);
  // let [cartList, setCartList] = useState<ICartList[]>([]);

  const { cart } = useSelector(({ product }: RootState) => ({
    cart: product.cart,
  }));

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }
  //  cart.forEach((elem:any) => {

  // });

  const cartList = cart.map((el: any) => <Cart key={el.id} {...el} />);
console.log(cartList);


  return (
    <HeaderWrapper>
      <HeaderBar>
        <div className="logo">CharChuI</div>
        <NavLink to="home" className="link">
          Home page
        </NavLink>
        <NavLink to="pagelist" className="link">
          List page
        </NavLink>
      </HeaderBar>
      <ShopButton>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-btn ${cartOpen && "active"}`}
        />
      </ShopButton>
      {cartOpen && (
        <div className="cart-shop">
          <div>{cartList}</div>
          {cart?.length > 0 && (
            <div className="total-price">
              <div>Total price </div>
              <div>{totalPrice.toFixed(2)} $</div>
            </div>
          )}
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
