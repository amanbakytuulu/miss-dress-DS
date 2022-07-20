import React from "react";

import { ICartList } from "../../types/headerTypes/headerTypes";

import CartItem from "../../components/CartItem/CartItem";

import OrderForm from "./OrderForm/OrderForm";
import CartSummary from "./CartSummary/CartSummary";

import classes from "./CartPage.module.scss";

const arr: ICartList[] = [
  {
    title: "name",
  },
  {
    title: "name",
  },
];

const CartPage = () => {
  return (
    <div className={classes.cartPage}>
      <div className={`${classes.cartPageWrapper} ${classes.container}`}>
        <div className={classes.cartPageMain}>
          <div className={classes.cartPageOrder}>
            <OrderForm />
          </div>
          <h3 className={classes.cartPageListTitle}>Состав заказа</h3>
          <div className={classes.cartPageList}>
            {arr.map((item) => {
              return <CartItem />;
            })}
          </div>
        </div>
        <div className={classes.cartPageSum}>
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
