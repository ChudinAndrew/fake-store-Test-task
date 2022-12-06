import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/redux-store";
import { ImageWrapper, ListPageProduct, NavBar, PostProduct, ProductsWrapper } from "../../styles";
import { fetchProducts } from "./store/actions";

interface IProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = ({
  title,
  id,
  category,
  description,
  image,
  price,
  rating,
}: IProps) => {
  const navigate = useNavigate()

  return (
    <PostProduct onClick={()=>navigate(`/product/${id}`)}>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>
      <div>{title}</div>
      <button className="btn">Buy</button>
      {/* <button className="btn">Show more</button> */}
    </PostProduct>
  );
};

const ListPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const { products } = useSelector(({ product }: RootState) => ({
    products: product.products,
  }));

  const product = products.map((prod: any) => (
    <Product key={prod.id} {...prod} />
  ));

  return (
    <ListPageProduct>
      <NavBar>
        {/* <div>Filter by category</div>
        <select>
          <option value="">All</option>
          <option value="">Jawelery</option>
          <option value="">Clothes</option>
        </select> */}
      </NavBar>
      <div>
      <ProductsWrapper>{product}</ProductsWrapper>
      </div>
      
    </ListPageProduct>
  );
};

export default ListPage;
