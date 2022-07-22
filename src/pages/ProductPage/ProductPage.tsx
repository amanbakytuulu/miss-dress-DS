import React, { FC, useState } from "react";

import { Grid } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// import { Icon } from "react-icons-kit";
import { caretLeft } from "react-icons-kit/fa/caretLeft";
import { caretRight } from "react-icons-kit/fa/caretRight";
import Icon from "react-icons-kit";

import mainDress from "../../assets/ProductPage2/mainDress.png";

import ProductCard from "../../components/ProductCard/ProductCard";

import { similarDresses, dress_description } from "./productDb";

import styles from "./ProductPage.module.scss";

import SwiperVertical from "./SwiperVertical";

import "swiper/css";
import "swiper/css/navigation";
interface IColors {
  id: number;
  color: string;
}

SwiperCore.use([Navigation]);

const ProductPage: FC = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [color, setColors] = useState<IColors[]>([
    { id: 0, color: "#000000" },
    { id: 1, color: "#B89981" },
    { id: 2, color: "#25B133" },
    { id: 3, color: "#49C7EF" },
    { id: 4, color: "#4E53DB" },
    { id: 5, color: "#FB9BBD" },
    { id: 6, color: "#F45656" },
  ]);

  return (
    <div className={styles.background_container}>
      <div className={styles.product_container}>
        <Grid container spacing={2}>
          <Grid item xs={11} md={3} order={{ xs: 3, md: 1 }}>
            <SwiperVertical />
          </Grid>

          <Grid item xs={6} md={4} order={{ xs: 1, md: 2 }}>
            <img
              src={mainDress}
              alt="main dress"
              width="87%"
              className={styles.main_dress}
            />
          </Grid>

          <Grid item xs={6} md={5} order={{ xs: 2, md: 3 }}>
            <div className={styles.text_dress}>
              <h3>{dress_description.title}</h3>
              <p>Артикул: {dress_description.article}</p>
              <p>Количество в линейке: {dress_description.quantity}</p>
              <p className={styles.colors}>
                Цвет:
                <span className={styles.color}>
                  {color.map((el) => (
                    <p
                      key={el.id}
                      className={styles.each_color}
                      style={{ backgroundColor: el.color }}
                    ></p>
                  ))}
                </span>
              </p>
              <h3>
                {dress_description.price_old}
                <span>{dress_description.price_new}</span>
              </h3>
              <div className={styles.description_flex}>
                <p>Размер: {dress_description.size}</p>
                <p>Ткань: {dress_description.cloth}</p>
              </div>
              <div className={styles.description_flex}>
                <p>Длина: {dress_description.length}</p>
                <p>Фасон: {dress_description.style}</p>
              </div>

              <div className={styles.description_change}>
                <h4>О товаре:</h4>
                <p className={styles.description}>
                  {dress_description.description}
                </p>
                <button className={styles.btn}>Перейти в корзину</button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.description_change_mobile}>
          <h4>О товаре:</h4>
          <p className={styles.description}>{dress_description.description}</p>
          <button className={styles.btn}>Перейти в корзину</button>
        </div>

        <div className={styles.similar_container}>
          <h1>Похожие товары</h1>
          <div ref={navigationPrevRef} className={styles.similar_swiper_left}>
            <Icon size={55} icon={caretLeft} />
          </div>
          <Swiper
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
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
            loop={true}
            loopFillGroupWithBlank={true}
            mousewheel={true}
            modules={[Navigation]}
            className={styles.similarSwiper}
            slidesPerView={2}
            direction={"horizontal"}
            spaceBetween={50}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
            }}
          >
            {similarDresses.map((el: any) => (
              <SwiperSlide key={el.id}>
                <ProductCard item={el} btnTitle="Открыть" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationNextRef} className={styles.similar_swiper_right}>
            <Icon size={55} icon={caretRight} />
          </div>
        </div>
        <button className={styles.btnMobile}>Смотреть все товары</button>
      </div>
    </div>
  );
};

export default ProductPage;
