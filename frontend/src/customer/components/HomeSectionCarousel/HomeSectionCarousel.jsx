import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./HomeSectionCarousel.css"; // For custom styles
import { findProducts } from "../../../state/product/Action";

const HomeSectionCarousel = ({ data, sectionName }) => {

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile view
            720: { slidesPerView: 3 }, // Tablet view
            1024: { slidesPerView: 4 }, // Desktop view
          }}
        >
          {data?.slice(0, 10)?.map((item, index) => (
            <SwiperSlide key={index}>
              <HomeSectionCard product={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons */}
        <button className="custom-prev">
          <KeyboardArrowLeftIcon />
        </button>
        <button className="custom-next">
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
