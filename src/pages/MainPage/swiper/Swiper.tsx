import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import photo2 from "../../../assets/mainSwiper/photo2.png";
import photo3 from "../../../assets/mainSwiper/photo3.png";

import styles from "./Swiper.module.scss";

const MainSwiper: FC = () => {
  const swiperArr = [
    { id: 0, photo: photo2 },
    { id: 1, photo: photo3 },
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
      >
        {swiperArr.map((photo) => (
          <SwiperSlide className={styles.swiperSlide}>
            <div key={photo.id}>
              <img src={photo.photo} alt="clothes" />
              <p>
                Скидки до 50%! <br />
                Успей приобрести товар по выгодной цене!
              </p>
            </div>
          </SwiperSlide>
        ))}
        <button className={styles.btn}>Подробнее</button>
      </Swiper>
    </div>
  );
};
export { MainSwiper };
