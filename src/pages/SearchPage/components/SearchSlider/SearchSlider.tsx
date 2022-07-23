import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper";

import { ProductCard } from "../../../../components";

import classes from "./SearchSlider.module.scss";

interface SearchSliderProps {
  slides: any;
}

const SearchSlider: FC<SearchSliderProps> = ({ slides }) => {
  return (
    <div className={classes.searchSlider}>
      <Swiper
        style={{ position: "static" }}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: slides || 2,
        //   },
        // }}
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        navigation={true}
        freeMode={true}
        modules={[Pagination, Navigation, Controller]}
      >
        {slides?.map((slide: any, index: number) => {
          return (
            <SwiperSlide className={classes.slide} key={index}>
              <ProductCard btnTitle={"Открыть"} item={slide} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SearchSlider;
