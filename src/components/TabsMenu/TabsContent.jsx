import React from "react";
import TabsMenu from "./TabsMenu";
import Burger from "./Burger";
import Sandwitch from "./Sandwitch";
import Pizza from "./Pizza";

const tabsContent = [
  {
    label: "الكل",
    content: (
      <>
        <Burger />
        <Pizza />
        <Sandwitch />
      </>
    ),
  },
  {
    label: "برجر",
    content: <Burger />,
  },
  {
    label: "بيتزا",
    content: <Pizza />,
  },
  {
    label: "سندوتش",
    content: <Sandwitch />,
  },
];

const TabsContent = () => {
  return (
    <div className="main_layout">
      <TabsMenu tabs={tabsContent} />
    </div>
  );
};

export default TabsContent;
