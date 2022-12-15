import { Formik } from "formik";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import {
  FormikWrapper,
  OrderItems,
  OrderWrapper,
  ErrorMess,
} from "./orderStyles";
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

const OrderC: FC = () => {
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

  return (
    <OrderWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          number: "",
          adress: "",
          orderStatus: "Order accepted",
        }}
        validationSchema={OrderValidation}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <FormikWrapper className="formik" onSubmit={handleSubmit}>
            <h3>Contact Inforation</h3>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && errors.firstName}

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && errors.lastName}
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label>Phone number</label>
            <input
              type="text"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            {errors.number && touched.number && errors.email}
            <label>Adress</label>
            <input
              type="adress"
              name="adress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.adress}
            />
            {errors.adress && touched.adress && errors.adress}
            <button type="submit" disabled={isSubmitting}>
              Order
            </button>
          </FormikWrapper>
        )}
      </Formik>

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

export default OrderC;
