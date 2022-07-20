import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./ProductPage.module.scss";

import { dressDatabase } from "./productDb";

interface IArrDress {
  id: number;
  dress: string;
}

const SwiperVertical = () => {
  const [arrDress, setArrDress] = useState<IArrDress[]>([]);

  useEffect(() => {
    setArrDress(dressDatabase);
  }, []);

  return (
    <div className={styles.mainSwiper}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
        slidesPerView={4}
        direction={"horizontal"}
        zoom={true}
        breakpoints={{
          800: {
            direction: "vertical",
          },
        }}
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
