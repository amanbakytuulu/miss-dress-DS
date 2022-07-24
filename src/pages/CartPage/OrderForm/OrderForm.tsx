import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/modalTypes/inputTypes";

import classes from "./OrderForm.module.scss";
import OrderCheck from "./OrderCheck/OrderCheck";

type FormValues = {
  name: string;
  phoneNumber: string;
  city: string;
  surname: string;
  country: string;
};

const OrderForm = () => {
  const [isSaved, setSaved] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onBlur" });

  return (
    <div className={classes.orderFormWrapper}>
      <div className={classes.orderFormHeader}>
        <h2 className={classes.orderFormTitle}>Оформление заказа</h2>
      </div>
      {!isSaved ? (
        <form className={classes.orderForm}>
          <div className={classes.orderFormLeft}>
            <InputField
              inputConfig={{
                ...register("name", {
                  required: "Укажите Имя",
                  minLength: {
                    value: 3,
                    message: "Имя слишком короткое",
                  },
                }),
              }}
              error={errors.name?.message}
              color={colors.secondary}
              placeholder={"Ваше имя"}
              type={"text"}
            />
            <InputField
              inputConfig={{
                ...register("phoneNumber", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 13,
                    message: "Слишком короткий номер телефона",
                  },
                  pattern: {
                    value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                    message: "Некорекктный номер телефона",
                  },
                }),
              }}
              color={colors.secondary}
              placeholder={"Номер телефона"}
              type={"tel"}
            />
            <InputField
              inputConfig={{
                ...register("city", {
                  required: "Укажите Город",
                }),
              }}
              color={colors.secondary}
              placeholder={"Город"}
              type={"text"}
            />
          </div>
          <div className={classes.orderFormRight}>
            <InputField
              inputConfig={{
                ...register("surname", {
                  required: "Укажите Фамилию",
                }),
              }}
              color={colors.secondary}
              placeholder={"Ваша фамилия"}
              type={"text"}
            />
            <InputField
              inputConfig={{
                ...register("country", {
                  required: "Укажите Страну",
                }),
              }}
              color={colors.secondary}
              placeholder={"Страна"}
              type={"text"}
            />
            <Button>Сохранить</Button>
          </div>
        </form>
      ) : (
        <OrderCheck />
      )}
    </div>
  );
};

export default OrderForm;
