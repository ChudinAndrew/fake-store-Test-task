import { useDispatch } from "react-redux";
import { deleteCartItem } from "../ListPage/store/actions";
import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/system";
interface ICartList {
  title: string;
  image: string;
  price: number;
  id: number;
}

const Cart = ({ title, image, price, id }: ICartList) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItem>
        <Box component="img" src={image} sx={{ height: "50px" }} />
      </ListItem>
      <ListItem sx={{ justifyContent:'end'}}>
        <Typography sx={{ float: "right" }} variant="inherit" component="div">
          {price} $
        </Typography>
      </ListItem>
      <IconButton onClick={() => dispatch(deleteCartItem(id))}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default Cart;
