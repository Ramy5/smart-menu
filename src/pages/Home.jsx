import React from "react";
import Header from "../components/Header/Header";
import OffersSlide from "../components/OffersSlide/OffersSlide";
import TabsContent from "../components/TabsMenu/TabsContent";
import PhoneFooter from "../components/PhoneFooter/PhoneFooter";
import ShoppingCart from "../components/Cart/ShoppingCart";

const Home = () => {
  return (
    <div dir="rtl">
      <Header />
      <OffersSlide />

      <p className="text-[#0f5132] bg-[#badbcc] py-3 px-4 mt-4 mx-4 rounded-xl">
        المطعم متاح من الساعة 11 صباحا ل 3 مساء
      </p>

      <TabsContent />

      <PhoneFooter />

      <ShoppingCart />
    </div>
  );
};

export default Home;
