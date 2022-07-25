import React, { FC } from "react";

import { Button } from "../../../components/common";

import classes from "./CartSummary.module.scss";

interface CartSummaryProps {
  openModal: () => void;
}

const CartSummary: FC<CartSummaryProps> = ({ openModal }) => {
  return (
    <div className={classes.cartSummary}>
      <h3 className={classes.cartSummaryTitle}>Итого</h3>
      <div className={classes.cartSummaryInfo}>
        <p>
          <span>Общая сумма</span> <strong>22500 с.</strong>
        </p>
        <p>
          <span>Скидка</span> <strong>4530 с.</strong>
        </p>
        <p>
          <span>Итог</span> <strong>17970 с.</strong>
        </p>
      </div>
      <div className={classes.cartSummaryBtn}>
        <Button onClick={openModal}>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default CartSummary;
