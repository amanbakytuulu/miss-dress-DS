import React, { useState } from "react";

import { ICartList } from "../../types/headerTypes/headerTypes";

import { Modal } from "../../components";

import SuccessOrder from "../../components/Modal/SuccessOrder/SuccessOrder";

import OrderForm from "./OrderForm/OrderForm";
import CartSummary from "./CartSummary/CartSummary";
import CartList from "./CartList/CartList";

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
  const [isModalOpen, setOpenModal] = useState<boolean>(false);

  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <div className={classes.cartPage}>
        <div className={`${classes.cartPageWrapper} ${classes.container}`}>
          <div className={classes.cartPageMain}>
            <div className={classes.cartPageOrder}>
              <OrderForm />
            </div>
            <h3 className={classes.cartPageListTitle}>Состав заказа</h3>
            <CartList cartList={arr} />
          </div>
          <div className={classes.cartPageSum}>
            <CartSummary openModal={openModal} />
          </div>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <SuccessOrder closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CartPage;
