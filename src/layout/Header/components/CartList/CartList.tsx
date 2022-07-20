import React, { FC } from "react";

import classes from "../../HeaderNavIcons/HeaderNavIcons.module.scss";
import CartItem from "../../../../components/CartItem/CartItem";
import { ICartList } from "../../../../types/headerTypes/headerTypes";

interface CartListProps {
  cartList: ICartList[];
}

const CartList: FC<CartListProps> = ({ cartList }) => {
  return (
    <div className={classes.headerCartList}>
      {cartList.map((item: ICartList) => {
        return <CartItem />;
      })}
    </div>
  );
};

export default CartList;
