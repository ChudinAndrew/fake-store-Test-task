import { useFormik } from "formik";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import { FormikWrapper, OrderItems, OrderWrapper } from "./orderStyles";
import { object, string, ref } from "yup";

interface ICartList {
  title: string;
  image: string;
  price: number;
  id: number;
}

const OrderValidation = object().shape({
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  number: string()
    .min(8, "Password must be min 8 symbols!")
    .required("Password must be min 8 symbols!"),
  adress: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});

const CartOrder = ({ image, price }: ICartList) => {
  let [count, setCount] = useState(1);
  let priceC = count * price;

  return (
    <OrderItems>
      <div>
        <img className="order-image" src={image} />
      </div>
      <div className="count-button">
        <button onClick={() => setCount(count + 1)}>+</button> {count}{" "}
        <button disabled={count < 2} onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
      <div className="item-price">{priceC.toFixed(2)} $</div>
    </OrderItems>
  );
};

const Order: FC = () => {
  const { cart } = useSelector(({ product }: RootState) => ({
    cart: product.cart,
  }));
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }

  const cartOrderList = cart.map((el: any) => (
    <CartOrder key={el.id} {...el} />
  ));
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      adress: "",
      orderStatus: "Order accepted",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: { OrderValidation },
  });
  return (
    <OrderWrapper>
      <FormikWrapper className="formik" onSubmit={formik.handleSubmit}>
        <h3>Contact information</h3>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="number">Phone number</label>
        <input
          id="number"
          name="number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.number}
        />
        <label htmlFor="adress">Address</label>
        <input
          id="adress"
          name="adress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.adress}
        />

        <button type="submit">Order</button>
      </FormikWrapper>

      <div>
        <h3>Your order</h3>
        <div>{cartOrderList}</div>
        <h5 className="total-price">
          Total price <b>{totalPrice.toFixed(2)} $</b>
        </h5>
      </div>
    </OrderWrapper>
  );
};

export default Order;
