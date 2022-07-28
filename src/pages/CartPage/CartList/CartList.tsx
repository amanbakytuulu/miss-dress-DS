import React, { FC } from "react";

import CartItem from "../../../components/CartItem/CartItem";

import classes from "./CartList.module.scss";

interface CartListProps {
  cartList: any;
}

const CartList: FC<CartListProps> = ({ cartList }) => {
  return (
    <div className={classes.cartPageList}>
      {cartList.map((item: any) => {
        return (
          <div className={classes.cartItem} key={item.title}>
            <CartItem />
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
