import React, { useState } from "react";

import item from "../../assets/mainPage/categories/first.png";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";

import classes from "./CartItem.module.scss";

const CartItem = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className={classes.cartItem}>
      <div className={classes.cartItemContent}>
        <div className={classes.cartItemImage}>
          <img src={item} alt={"item"} />
        </div>
        <div className={classes.cartItemInfo}>
          <div className={classes.cartItemHeader}>
            <div className={classes.cartItemHeaderText}>
              <h4 className={classes.cartItemTitle}>Benito Kate Wrap Dress</h4>
              <p className={classes.cartItemTextInfo}>
                <span>Артикул:</span> <strong>Платья</strong>
              </p>
              <p className={classes.cartItemTextInfo}>
                <span>Размер:</span> <strong>14-29</strong>
              </p>
              <p className={classes.cartItemTextInfo}>
                <span>Цвет:</span> <strong>Черный</strong>
              </p>
            </div>
            <span className={classes.cartItemCross}>
              <CrossIcon />
            </span>
          </div>

          <div className={classes.cartItemFooter}>
            <div className={classes.cartItemButtons}>
              <button onClick={decrement} className={classes.decreaseBtn}>
                -
              </button>
              <div className={classes.counter}>
                <span>{counter}</span>
              </div>
              <button onClick={increment} className={classes.increaseBtn}>
                +
              </button>
            </div>

            <span>5990</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
