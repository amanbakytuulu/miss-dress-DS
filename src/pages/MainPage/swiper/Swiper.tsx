import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import photo2 from "../../../assets/mainSwiper/photo2.png";
// import photo3 from "../../../assets/mainSwiper/photo3.png";

import styles from "./Swiper.module.scss";

const MainSwiper: FC = () => {
  const swiperArr = [
    { id: 0, photo: photo2 },
    { id: 1, photo: photo2 },
    { id: 2, photo: photo2 },
    { id: 3, photo: photo2 },
    { id: 4, photo: photo2 },
  ];
  return (
    <div className={styles.swiperDiv}>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
        allowTouchMove={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        effect={"fade"}
      >
        {swiperArr.map((photo) => (
          <SwiperSlide className={styles.swiperSlide}>
            <div key={photo.id}>
              <img src={photo.photo} alt="clothes" />
              <p>
                Скидки до 50%! <br />
                Успей приобрести товар по выгодной цене!
              </p>
              <button className={styles.btn}>Подробнее</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export { MainSwiper };
