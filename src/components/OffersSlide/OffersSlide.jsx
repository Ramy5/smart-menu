import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OffersSlide = () => {
  return (
    <div className="pt-24">
      {/* SLIDE */}
      <Swiper
        className="w-full col-span-2"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={"/2.webp"} className="h-44" alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/3.webp"} className="h-44" alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/2.webp"} className="h-44" alt="offer" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/3.webp"} className="h-44" alt="offer" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OffersSlide;
