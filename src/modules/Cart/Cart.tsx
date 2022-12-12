import { CartWrapper } from "./CartStyless";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../ListPage/store/actions";
import { ShopButton } from "../../styles";
interface ICartList {
  title: string;
  image: string;
  price: number;
  id: number;
}

const Cart = ({ title, image, price, id }: ICartList) => {
  const dispatch = useDispatch();
  return (
    <CartWrapper>
      <div>
        <img className="img" src={image} />
      </div>
      <div className="price-trash">
        <div className="price">{price} $</div>
        <FaTrash onClick={()=>dispatch(deleteCartItem(id))} className="trash" />
      </div>
    </CartWrapper>
  );
};

export default Cart;
