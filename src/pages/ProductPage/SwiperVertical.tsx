import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { Icon } from "react-icons-kit";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { caretLeft } from "react-icons-kit/fa/caretLeft";
import { caretRight } from "react-icons-kit/fa/caretRight";

import styles from "./ProductPage.module.scss";

import { dressDatabase, IArrDress } from "./productDb";

const SwiperVertical = () => {
  const [arrDress, setArrDress] = useState<IArrDress[]>([]);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    setArrDress(dressDatabase);
  }, []);

  return (
    <div className={styles.verticalSwiper}>
      <div ref={navigationPrevRef} className={styles.iconUp}>
        <Icon color="#372E24" size={55} icon={caretUp} />
      </div>
      <div ref={navigationPrevRef} className={styles.iconLeftMobile}>
        <Icon color="#372E24" size={55} icon={caretLeft} />
      </div>
      <Swiper
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onSwiper={(swiper: any) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation]}
        className={styles.swiper}
        slidesPerView={4}
        direction={"horizontal"}
        zoom={true}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          900: {
            direction: "vertical",
            slidesPerView: 4,
          },
        }}
      >
        {arrDress.map((el: IArrDress) => (
          <SwiperSlide key={el.id}>
            <img src={el.dress} alt="dresses" className={styles.dress} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationNextRef} className={styles.iconDown}>
        <Icon color="#372E24" size={55} icon={caretDown} />
      </div>
      <div ref={navigationNextRef} className={styles.iconRightMobile}>
        <Icon color="#372E24" size={55} icon={caretRight} />
      </div>
    </div>
  );
};
export default SwiperVertical;
