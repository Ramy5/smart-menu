import React from "react";
import Header from "../components/Header/Header";
import PhoneFooter from "../components/PhoneFooter/PhoneFooter";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div dir="rtl">
      <Header />
      <LoginForm />
      <PhoneFooter />
    </div>
  );
};

export default Login;
