import { FC } from "react";

import { Grid } from "@mui/material";

import styles from "./DeliveryOrder.module.scss";

import { myOrder, IMyOrder, IOrders } from "./DeliveryOrderDB";

const DeliveryOrder: FC = () => {
  return (
    <div className={styles.main_container}>
      {myOrder.map((el: IMyOrder) => (
        <div className={styles.container}>
          <p>
            <span className={styles.orderId}>Заказ {el.orderId}</span>
            <span>{el.status}</span>
          </p>

          <article>
            {el.orders.map((el: IOrders) => (
              <Grid container spacing={2} className={styles.grid}>
                <Grid md={12} xs={12}>
                  <hr className={styles.lineThrough}></hr>
                </Grid>
                <Grid md={2}>
                  <img src={el.img} alt="dress" className={styles.img} />
                </Grid>
                <Grid md={9} className={styles.description}>
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
                <Grid md={1}>
                  <p className={styles.newPrice}>{el.newPrice}</p>
                  <p className={styles.oldPrice}>{el.oldPrice}</p>
                </Grid>
              </Grid>
            ))}
          </article>
        </div>
      ))}
    </div>
  );
};

export default DeliveryOrder;
