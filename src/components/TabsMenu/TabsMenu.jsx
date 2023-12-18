import React, { useState } from "react";

const TabsMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => setActiveTab(index);

  return (
    <>
      <div className="main_padding mx-2">
        <ul className="text-center flex items-center gap-2 mt-4 overflow-x-auto mb-4">
          {tabs.map((tab, tabIndex) => {
            return (
              <li
                key={tabIndex}
                className={`${
                  activeTab === tabIndex || tab.label === tabs[activeTab].label
                    ? "text-white bg-[#dc3545]"
                    : ""
                } cursor-pointer px-3 rounded-xl text-center py-2 block font-bold transition-all duration-300 text-[#dc3545] border border-[#dc3545]`}
                onClick={() => handleTabClick(tabIndex)}
              >
                {tab.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-slate-50 pb-24">
        {tabs[activeTab].content || tabs[0].content}
      </div>
    </>
  );
};

export default TabsMenu;
