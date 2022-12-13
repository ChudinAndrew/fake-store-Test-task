import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/redux-store";
import {
  ImageWrapper,
  ListPageProduct,
  NavBar,
  PostProduct,
  ProductsWrapper,
} from "../../styles";
import Preloader from "../Preloader/preloader";
import { fetchProducts, setCart } from "./store/actions";

interface IProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  count:number;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = ({ title, id, image, price, count=1 }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <PostProduct>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <div>{title}</div>
      <div className="buttons">
        <button
          className="btn-buy"
          onClick={() => dispatch(setCart({ title, id, image, price, count }))}
        >
          Buy
        </button>
        <button className="btn" onClick={() => navigate(`/product/${id}`)}>
          Show more
        </button>
      </div>
    </PostProduct>
  );
};

const ListPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { products, isFetching } = useSelector(({ product }: RootState) => ({
    products: product.products,
    isFetching: product.isFetching,
  }));

  const product = products.map((prod: any) => (
    <Product key={prod.id} {...prod}  />
  ));

  return (
    <ListPageProduct>
      <NavBar></NavBar>
      {!isFetching ? (
        <div>
          <ProductsWrapper>{product}</ProductsWrapper>
        </div>
      ) : (
        <Preloader />
      )}
    </ListPageProduct>
  );
};

export default ListPage;
