// LoginForm.js
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("الحقل مطلوب"),
    password: Yup.string().required("الحقل مطلوب"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // Add your login logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-center">تسجيل الدخول</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                البريد الالكتروني
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full p-2 mt-1 border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                رقم المرور
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-2 mt-1 border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="w-4 h-4 ml-2"
                />
                <span className="text-base font-medium text-gray-700">
                  Remember me
                </span>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>

        <div className="text-center">
          <p>
            <a href="#" className="text-blue-500 hover:underline">
              ?Forget the password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
