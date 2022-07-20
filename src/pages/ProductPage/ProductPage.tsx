import { FC, useState } from "react";

import { Grid } from "@mui/material";

import mainDress from "../../assets/ProductPage2/mainDress.png";

import styles from "./ProductPage.module.scss";

import SwiperVertical from "./SwiperVertical";

import { dress_description } from "./productDb";
interface IColors {
  id: number;
  color: string;
}

const ProductPage: FC = () => {
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
    <div className={styles.product_container}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2.5} order={{ xs: 3, md: 1 }}>
          <SwiperVertical />
        </Grid>
        <Grid item xs={6} md={4} order={{ xs: 1, md: 2 }}>
          <img
            src={mainDress}
            alt="main dress"
            width="87%"
            className={styles.mainDress}
          />
        </Grid>
        <Grid item xs={6} md={5.5} order={{ xs: 2, md: 3 }}>
          <div className={styles.text}>
            <h3>Benito Kate Wrap Dress</h3>
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
              <span
                style={{ textDecoration: "line-through", paddingLeft: "12px" }}
              >
                {dress_description.price_new}
              </span>
            </h3>
            <div>
              <p>{dress_description.size}</p>
              <p>{dress_description.cloth}</p>
            </div>
            <div>
              <p>Длина: {dress_description.length}</p>
              <p>Фасон: {dress_description.style}</p>
            </div>
            <h4>О товаре:</h4>
            <p className={styles.description}>
              В наши дни платья по-прежнему пользуются спросом и популярностью
              среди молодежи, они занимают почетные места на презентациях мод.
              Однако постепенно в моду входит повседневный стиль, который не
              подразумевает использование красочных и ярких образов.Платье
              Benito Kate Wrap Dress отличный пример этому.
            </p>
            <button className={styles.btn}>Добавить в корзину</button>
          </div>
        </Grid>
      </Grid>
      <div>
        <h1>Похожие товары</h1>
      </div>
    </div>
  );
};

export default ProductPage;
