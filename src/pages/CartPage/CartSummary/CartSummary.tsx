import React, { FC, useState } from "react";

import { Button } from "../../../components/common";
import { Products } from "../../../types/cartPageTypes/orderFormTypes";

import classes from "./CartSummary.module.scss";

interface CartSummaryProps {
  openModal: () => void;
  products: Products[];
}

const CartSummary: FC<CartSummaryProps> = ({ products, openModal }) => {
  const totalPrice = products.reduce((sum, item) => sum + item.product.price, 0);
  const discount = 0;
  return (
    <div className={classes.cartSummary}>
      <h3 className={classes.cartSummaryTitle}>Итого</h3>
      <div className={classes.cartSummaryInfo}>
        <p>
          <span>Общая сумма</span> <strong>{totalPrice} c.</strong>
        </p>
        <p>
          <span>Скидка</span> <strong>{discount} с.</strong>
        </p>
        <p>
          <span>Итог</span> <strong>{totalPrice} с.</strong>
        </p>
      </div>
      <div className={classes.cartSummaryBtn}>
        <Button onClick={openModal}>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default CartSummary;
