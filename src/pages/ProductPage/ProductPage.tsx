import { FC, useState } from "react";

import mainDress from "../../assets/ProductPage2/mainDress.png";

import styles from "./ProductPage.module.scss";

import SwiperVertical from "./SwiperVertical";
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
      <div className={styles.swiper}>
        <SwiperVertical />
      </div>
      <div className={styles.dress_photo}>
        <img
          src={mainDress}
          alt="main dress"
          width="87%"
          className={styles.mainDress}
        />
      </div>
      <div className={styles.dress_description}>
        <div className={styles.text}>
          <h3>Benito Kate Wrap Dress</h3>
          <p>Артикул: Платья AD857</p>
          <p>Количество в линейке: 5</p>
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
            5990 <span style={{ textDecoration: "line-through" }}>7500</span>
          </h3>
          <div>
            <p>Размер: 29-49</p>
            <p>Ткань: Полиэстер</p>
          </div>
          <div>
            <p>Длина: 115</p>
            <p>Фасон: А-Силуэт</p>
          </div>
          <h4>О товаре:</h4>
          <p className={styles.description}>
            В наши дни платья по-прежнему пользуются спросом и популярностью
            среди молодежи, они занимают почетные места на презентациях мод.
            Однако постепенно в моду входит повседневный стиль, который не
            подразумевает использование красочных и ярких образов.Платье Benito
            Kate Wrap Dress отличный пример этому.
          </p>
          <button className={styles.btn}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
