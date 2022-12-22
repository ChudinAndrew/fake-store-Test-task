import { Formik } from "formik";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/redux-store";
import { FormikWrapper, OrderItems, OrderWrapper } from "./orderStyles";
import { object, string, ref, number } from "yup";
import { FaTrash } from "react-icons/fa";
import { deleteCartItem } from "../ListPage/store/actions";
import { useNavigate } from "react-router-dom";

interface ICartList {
  title: string;
  image: string;
  price: number;
  id: number;
}

const OrderValidation = object().shape({
  firstName: string().required("error message"),
  lastName: string().required("error message"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  number: number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  // adress: string()
  //   .required("Please confirm your password")
  //   .oneOf([ref("password")], "Passwords do not match"),
});

const CartOrder = ({ image, price, id }: ICartList) => {
  let [count, setCount] = useState(1);
  let priceC = count * price;
  const dispatch = useDispatch();
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
      <div className="item-price">
        {priceC.toFixed(2)} ${" "}
        <FaTrash
          onClick={() => dispatch(deleteCartItem(id))}
          className="trash"
        />
      </div>
    </OrderItems>
  );
};

const OrderC: FC = () => {
  const navigate = useNavigate();
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

  if (cart.length < 1) {
    navigate("/pagelist");
  }
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
            {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <label>Phone number</label>
            <input
              type="text"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            {errors.number && touched.number && <p>{errors.number}</p>}
            <label>Adress</label>
            <input
              type="adress"
              name="adress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.adress}
            />
            {errors.adress && touched.adress && <p>{errors.adress}</p>}
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
