import { FC } from "react";

import { Grid } from "@mui/material";

import styles from "./OrderInfo.module.scss";

import { myOrder, IMyOrder, IOrders, orderInfo } from "./OrderInfoDB";

const OrderDetails: FC = () => {
  return (
    <div className={styles.main_container}>
      {myOrder.map((el: IMyOrder) => (
        <div className={styles.container}>
          <h3>Мои заказы</h3>
          <p>
            <span className={styles.orderId}>Заказ {el.orderId}</span>
            <span className={styles.status}>{el.status}</span>
          </p>

          <article>
            {el.orders.map((el: IOrders) => (
              <Grid container spacing={2} className={styles.grid}>
                <Grid md={12} xs={12}>
                  <hr className={styles.lineThrough}></hr>
                </Grid>
                <Grid md={2} xs={2}>
                  <img src={el.img} alt="dress" className={styles.img} />
                </Grid>
                <Grid md={9} xs={9} className={styles.description}>
                  <p className={styles.title}>{el.title}</p>
                  <p>
                    Артикул: <span>{el.article}</span>
                  </p>
                  <p>
                    Размер: <span>{el.size}</span>
                  </p>
                  <p>
                    Цвет: <span>{el.color}</span>
                  </p>
                  <p>
                    Количество товара в линейке: <span>{el.count}</span>
                  </p>
                </Grid>
                <Grid md={1} xs={1}>
                  <p className={styles.newPrice}>{el.newPrice}</p>
                  <p className={styles.oldPrice}>{el.oldPrice}</p>
                </Grid>
              </Grid>
            ))}
          </article>
          <hr></hr>
          <Grid container spacing={2} className={styles.orderInfo}>
            <Grid item md={3} xs={6} className={styles.questions}>
              <p>Получатель: </p>
              <p>Номер телефона: </p>
              <p> Адрес доставки: </p>
              <p>Итого к оплате: </p>
            </Grid>
            <Grid item md={9} xs={6} className={styles.answers}>
              <p>{orderInfo.to}</p>
              <p>{orderInfo.number}</p>
              <p>{orderInfo.address}</p>
              <p>{orderInfo.total}</p>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default OrderDetails;
