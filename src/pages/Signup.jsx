import React from "react";
import Header from "../components/Header/Header";
import PhoneFooter from "../components/PhoneFooter/PhoneFooter";
import SignupForm from "../components/Signup/SignupForm";

const Signup = () => {
  return (
    <div dir="rtl">
      <Header />
      <SignupForm />
      <PhoneFooter />
    </div>
  );
};

export default Signup;
