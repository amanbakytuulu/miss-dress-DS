import React, { useState } from "react";

import { ICartList } from "../../types/headerTypes/headerTypes";

import { Modal } from "../../components";
import { Loader } from "../../utils/Loader/Loader";
import { Error } from "../../utils/Error/Error";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";

import SuccessOrder from "../../components/Modal/SuccessOrder/SuccessOrder";

import { useGetProductFromCardQuery } from "../../store/features/Cart/cartQuery";

import OrderForm from "./OrderForm/OrderForm";
import CartSummary from "./CartSummary/CartSummary";
import CartList from "./CartList/CartList";

import classes from "./CartPage.module.scss";

const arr: ICartList[] = [
  {
    title: "name",
  },
  {
    title: "name2",
  },
];

const CartPage = () => {
  const [isModalOpen, setOpenModal] = useState<boolean>(false);
  const {
    data: productsCart = {},
    isLoading,
    isError,
  } = useGetProductFromCardQuery();
  const thisCart = productsCart?.result;
  const allProductsCart = productsCart?.result?.products || [];
  const totalPrice = productsCart?.result?.price || 0;
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  if (isLoading) {
    return (
      <div
        style={{ paddingTop: "20%", minHeight: "70vh", background: "#fff2e3" }}
      >
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{ paddingTop: "20%", minHeight: "70vh", background: "#fff2e3" }}
      >
        <Error />
      </div>
    );
  }
  const links = [
    { title: "Главная", path: "/" },
    { title: "Товары", path: "/categories" },
    { title: "Корзина", path: "/cart" },
    { title: "Оформление заказа" },
  ];

  return (
    <>
      <div className={classes.cartPage}>
        <BreadCrumbs links={links} />
        <div className={`${classes.cartPageWrapper} ${classes.container}`}>
          <div className={classes.cartPageMain}>
            <div className={classes.cartPageOrder}>
              <OrderForm totalPrice={totalPrice} />
            </div>
            <h3 className={classes.cartPageListTitle}>Состав заказа</h3>
            <CartList cartList={allProductsCart} />
          </div>
          <div className={classes.cartPageSum}>
            <CartSummary
              thisCart={thisCart}
              totalPrice={totalPrice}
              openModal={openModal}
            />
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
