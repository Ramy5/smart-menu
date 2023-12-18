import React, { useState } from "react";
import useCartStore from "../../store/CartStore";
import DetailsSidebar from "./DetailsSidebar";

const MenuCard = () => {
  const { openSidebar, toggleSidebar } = useCartStore();

  return (
    <>
      <div className="flex items-center justify-between gap-2 p-2 bg-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">بيج ماك</h2>
          <p>بيج ماك جامد جدا</p>
          <div className="flex items-center gap-2 mt-4">
            <button className="bg-[#dc3545] text-white rounded-se-lg p-3">
              EGP 50
            </button>
            <button
              onClick={toggleSidebar}
              className="bg-[#dc3545] text-white rounded-se-lg p-3"
            >
              order
            </button>
          </div>
        </div>
        <img className="w-44 h-44" src="/1665341024_Bigmac.png" alt="menu" />
      </div>

      {openSidebar && <DetailsSidebar closeSidebar={toggleSidebar} />}
    </>
  );
};

export default MenuCard;
