import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string } from "yup";
import { InputWrapper, SignUpWrapper } from "../SignUp/SignUpStyles";

const LoginValidation = object().shape({
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string()
    .min(8, "Password must be min 8 symbols!")
    .required("Password must be min 8 symbols!"),
});

const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);
  return (
    <InputWrapper>
      <label className="label" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`${meta.error && meta.touched ? "border" : "none"} input`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error-message"
      />
    </InputWrapper>
  );
};

function LogIn() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <SignUpWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
      >
        {() => {
          return (
            <Form className="form">
              <Input name="email" label="Email" />
              <Input name="password" label="Password" type="password" />
              <div className="btnreg">
                <button type="submit">Login</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </SignUpWrapper>
  );
}

export default LogIn;
