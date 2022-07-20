import React from "react";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/modalTypes/inputTypes";

import classes from "./OrderForm.module.scss";

const OrderForm = () => {
  return (
    <div className={classes.orderFormWrapper}>
      <div className={classes.orderFormHeader}>
        <h2 className={classes.orderFormTitle}>Оформление заказа</h2>
      </div>
      <form className={classes.orderForm}>
        <div className={classes.orderFormLeft}>
          <InputField
            color={colors.secondary}
            placeholder={"Ваше имя"}
            type={"text"}
          />
          <InputField
            color={colors.secondary}
            placeholder={"Номер телефона"}
            type={"tel"}
          />
          <InputField
            color={colors.secondary}
            placeholder={"Город"}
            type={"text"}
          />
        </div>
        <div className={classes.orderFormRight}>
          <InputField
            color={colors.secondary}
            placeholder={"Ваша фамилия"}
            type={"text"}
          />
          <InputField
            color={colors.secondary}
            placeholder={"Страна"}
            type={"text"}
          />
          <Button>Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
