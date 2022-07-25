import React, { FC } from "react";

import { Grid } from "@mui/material";

import { myOrders, IMyOrders } from "./DeliveryPageDB";

import styles from "./DeliveryPage.module.scss";

const DeliveryPage: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Мои заказы</h2>
      <hr className={styles.lineThrough}></hr>
      {myOrders.map((el: IMyOrders) => (
        <Grid container spacing={3} className={styles.gridContainer}>
          <Grid item md={2} style={{ fontWeight: "bold" }}>
            Заказ: {el.orderId}
          </Grid>
          <Grid item md={9} style={{ fontWeight: "lighter" }}>
            {el.status}
          </Grid>
          <Grid item md={1}>
            {el.date}
          </Grid>
          <Grid md={11.2} xs={12} className={styles.images}>
            {el.img.map((el) => (
              <img src={el} alt="orderPhoto" />
            ))}
            <div className={styles.empty_div}>
              <p className={styles.empty_div_text}>+10</p>
            </div>
          </Grid>
          <Grid md={0.8} xs={12} className={styles.price}>
            {el.price} с.
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default DeliveryPage;
