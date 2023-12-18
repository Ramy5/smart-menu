import React from "react";
import MenuCard from "../UI/MenuCard";

const Sandwitch = () => {
  return (
    <div>
      <h2 className="text-3xl mb-6 mr-2 text-gray-800">ساندوتش</h2>

      <div className="flex flex-col gap-4">
        {[1, 2].map((el) => {
          return <MenuCard />;
        })}
      </div>
    </div>
  );
};

export default Sandwitch;
