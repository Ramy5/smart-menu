import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="animate_sidebar w-full h-full bg-gray-100 fixed top-0 left-0 z-[1000]">
      <AiOutlineClose
        onClick={closeSidebar}
        className="absolute text-2xl text-red-700 top-4 left-4 font-bolder"
      />

      <p className="flex flex-col gap-4 px-8 py-16">
        <Link
          className="text-lg text-gray-700 transition-colors duration-200"
          to="/login"
        >
          تسجيل الدخول
        </Link>
        <Link
          className="text-lg text-gray-700 transition-colors duration-200"
          to="/signup"
        >
          عميل جديد
        </Link>
      </p>
    </aside>
  );
};

export default Sidebar;
