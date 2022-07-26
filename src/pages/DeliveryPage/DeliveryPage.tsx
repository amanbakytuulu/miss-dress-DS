import React, { FC } from "react";

import { Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { myOrders, IMyOrders } from "./DeliveryPageDB";

import styles from "./DeliveryPage.module.scss";

const DeliveryPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h2>Мои заказы</h2>
      <hr></hr>
      {myOrders.map((el: IMyOrders) => (
        <Grid container spacing={3} className={styles.gridContainer}>
          <Grid item md={3} xs={5} sm={4} style={{ fontWeight: "bold" }}>
            Заказ: {el.orderId}
          </Grid>
          <Grid item md={8} xs={4} sm={6} style={{ fontWeight: "lighter" }}>
            {el.status}
          </Grid>
          <Grid item md={1} xs={3} sm={2}>
            {el.date}
          </Grid>
          <Grid md={11} xs={12} sm={10} className={styles.images}>
            {el.img.map((el) => (
              <img src={el} alt="orderPhoto" />
            ))}

            <button
              className={styles.empty_div}
              style={{ fontWeight: "lighter" }}
              onClick={() => navigate(`/delivery:${el.orderId}`)}
            >
              <p className={styles.empty_div_text}>+10</p>
            </button>
          </Grid>
          <Grid md={1} xs={12} sm={2} className={styles.price}>
            {el.price} с.
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default DeliveryPage;
