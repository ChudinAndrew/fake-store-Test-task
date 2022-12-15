import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { InputWrapper, SignUpWrapper } from "./SignUpStyles";

const RegisterValidation = object().shape({
  name: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(8, "Password must be min 8 symbols!").required("Password must be min 8 symbols!"),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([ref("password")], "Passwords do not match"),
});

const Input = ({ name, label, ...props }: any) => {
  const [field, meta] = useField(name);
  return (
    <InputWrapper>
      <label
        className='label'
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border" : "none"
        } input`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className='error-message'
      />
    </InputWrapper>
  );
};

function SignUp() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <SignUpWrapper>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidation}
      >
        {() => {
          return (
            <Form className="form">
              <Input name="name" label="Name" />
              <Input name="email" label="Email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <div className="btnreg">
                <button type="submit">Register</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </SignUpWrapper>
  );
}

export default SignUp;
