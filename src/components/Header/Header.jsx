import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../UI/Sidebar";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar(true);
  const handleCloseSidebar = () => setOpenSidebar(false);

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-wrap items-center justify-between w-full h-20 px-2 py-4 bg-white main_layout xl:py-6">
      {/* CENTER */}
      <Link to="/" className="block mr-2 text-xl">
        المنيو
      </Link>

      {/* LEFT */}
      <div className="flex flex-col gap-2">
        <div className="cursor-pointer">
          <FaRegUser
            onClick={handleOpenSidebar}
            className="block w-12 h-12 p-3 text-xl rounded-full xl:hidden bg-slate-100"
          />
        </div>

        {openSidebar && <Sidebar closeSidebar={handleCloseSidebar} />}
      </div>
    </header>
  );
};

export default Header;
