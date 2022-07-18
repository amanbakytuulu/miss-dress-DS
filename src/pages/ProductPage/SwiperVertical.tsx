import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import dress1 from "../../assets/ProductPage2/dress1.png";
import dress2 from "../../assets/ProductPage2/dress2.png";
import dress3 from "../../assets/ProductPage2/dress3.png";
import dress4 from "../../assets/ProductPage2/dress4.png";

import styles from "./ProductPage.module.scss";

interface IArrDress {
  id: number;
  dress: string;
}

const SwiperVertical = () => {
  const [arrDress, setArrDress] = useState<IArrDress[]>([
    { id: 1, dress: dress1 },
    { id: 2, dress: dress2 },
    { id: 3, dress: dress3 },
    { id: 4, dress: dress4 },
    { id: 5, dress: dress1 },
    { id: 6, dress: dress2 },
    { id: 7, dress: dress3 },
    { id: 8, dress: dress4 },
  ]);

  return (
    <div className={styles.mainSwiper}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
        slidesPerView={4}
        direction="vertical"
        zoom={true}
      >
        {arrDress.map((el: IArrDress) => (
          <SwiperSlide key={el.id}>
            <img src={el.dress} alt="dresses" className={styles.dress} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperVertical;
