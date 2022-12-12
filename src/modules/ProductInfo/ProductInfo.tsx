import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../redux/redux-store";
import {
  ListPageProduct,
  NavBar,
  NavBarProduct,
  ProductInfoS,
  ProductPage,
} from "../../styles";
import { setCart } from "../ListPage/store/actions";
import Preloader from "../Preloader/preloader";
import { fetchProduct } from "./store/actions";

const ProductInfo: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    let id = location.pathname.split("/")[2];
    dispatch(fetchProduct(id));
  }, []);
  const { product, isFetching } = useSelector(({ productId }: RootState) => ({
    product: productId.product,
    isFetching: productId.isFetching,
    // title:productId.product.title,
    // id:productId.product.id,
    // price:productId.product.price,
    // image:productId.product.image,
  }));

  return !isFetching ? (
    <ProductPage>
      <NavBarProduct></NavBarProduct>
      <ProductInfoS>
        <img className="small" src={product?.image} />
        <div className="info-product">
          <div>Title - {product.title}</div>
          <div>Category - {product?.category}</div>
          <div>Descriprion - {product?.description}</div>
          <div>
            Rating - {product?.rating?.rate}/5 voted ({product?.rating?.count}){" "}
          </div>
          <div className="price-and-button">
            {product.price} ${" "}
            <button
              onClick={() =>
                dispatch(
                  setCart({
                    title: product.title,
                    id: product.id,
                    image: product.image,
                    price: product.price,
                  })
                )
              }
              className="btn-buy"
            >
              Buy
            </button>
          </div>
        </div>
      </ProductInfoS>
    </ProductPage>
  ) : (
    <Preloader />
  );
};

export default ProductInfo;
