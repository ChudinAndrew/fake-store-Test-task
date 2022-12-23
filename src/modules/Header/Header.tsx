import { FC, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import Cart from "../Cart/Cart";
import {
  AppBar,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
// import { Route } from 'react-router'

// interface ICartList {
//   title: string;
//   image: string;
//   price: number;
//   id: number;
// }
const Header: FC = () => {
  let [cartOpen, setCartOpen] = useState(false);

  const { cart } = useSelector(({ product }: RootState) => ({
    cart: product.cart,
  }));
  const navigate = useNavigate();

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }
  //  cart.forEach((elem:any) => {

  // });

  const cartList = cart.map((el: any) => <Cart key={el.id} {...el} />);

  function orderClick() {
    setCartOpen((cartOpen = !cartOpen));
    navigate(`/order/`);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar sx={{ display: "flex" }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              CharChuI
            </Typography>
            <ButtonGroup variant="text" color="inherit">
              <Button
                variant="text"
                component={NavLink}
                to="home"
                color="inherit"
              >
                Home page
              </Button>
              <Button
                variant="text"
                component={NavLink}
                to="pagelist"
                color="inherit"
              >
                List page
              </Button>

              <Button
                variant="text"
                component={NavLink}
                to="login"
                color="inherit"
              >
                Log in
              </Button>

              <Button
                variant="text"
                component={NavLink}
                to="signup"
                color="inherit"
              >
                Sign up
              </Button>
            </ButtonGroup>
            <IconButton color="inherit" onClick={() => setCartOpen(true)}>
              <ShoppingCart />
            </IconButton>
            <Drawer
              anchor="right"
              open={cartOpen}
              onClose={() => setCartOpen(false)}
            >
              <List sx={{ width: "400px" }}>
                <ListItem>
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="Cart" />
                </ListItem>
                <Divider />
                {!cart.length ? (
                  <ListItem>Cart empty!</ListItem>
                ) : (
                  <>
                    {cart.map((el: any) => (
                      <Cart key={el.id} {...el} />
                    ))}
                    <Divider />
                    <ListItem>
                      <Typography sx={{ fontWeight: 600, flexGrow: 1 }}>
                        Total price :{" "}
                        {cart.reduce((acc: any, item: any) => {
                          return acc + item.price;
                        }, 0)}{" "}
                        $
                      </Typography>
                      <Button
                        onClick={orderClick}
                        variant="outlined"
                        color="inherit"
                      >
                        Order
                      </Button>
                    </ListItem>
                  </>
                )}
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
