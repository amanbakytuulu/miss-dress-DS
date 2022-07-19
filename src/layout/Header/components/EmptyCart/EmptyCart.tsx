import React from "react";

import { ReactComponent as CartIcon } from "../../../../assets/header/cartIcon.svg";

import classes from "./EmptyCart.module.scss";

const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
      <div className={classes.emptyCartInner}>
        <i>
          <CartIcon />
        </i>
        <p>Ваша корзина пуста</p>
        <button>Продолжить покупки</button>
      </div>
    </div>
  );
};

export default EmptyCart;
