import { Formik, Form, useField, ErrorMessage } from "formik";
import { object, string, ref } from "yup";
import { InputWrapper, SignUpWrapper } from "./SignUpStyles";

const RegisterValidation = object().shape({
  name: string().required("Required"),
  email: string()
    .required("Valid email required")
    .email("Valid email required"),
  password: string().min(8, "Required").required("Required"),
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

// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { FC } from "react";

// const SignUp: FC = () => {
//   return (
//     <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={RegisterValidation}
//       >
//         {() => {
//           return (
//             <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
//               <Input name="name" label="Name" />
//               <Input name="email" label="Email" />
//               <Input name="password" label="Password" type="password" />
//               <Input
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//               />
//               <div className="flex items-center justify-between">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Register
//                 </button>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//     );
//   };

//   export default SignUp;

// <div>
//   <h1>Any place in your app!</h1>
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     validate={(values) => {
//       const errors: any = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }
//       return errors;
//     }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//       }, 400);
//     }}
//   >
//     {({ isSubmitting }) => (
//       <Form>
//         <Field type="email" name="email" />
//         <ErrorMessage name="email" component="div" />
//         <Field type="password" name="password" />
//         <ErrorMessage name="password" component="div" />
//         <button type="submit" disabled={isSubmitting}>
//           Submit
//         </button>
//       </Form>
//     )}
//   </Formik>
// </div>
