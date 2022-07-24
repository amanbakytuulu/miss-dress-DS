import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/modalTypes/inputTypes";
import { IOrderFormValues } from "../../../types/cartPageTypes/orderFormTypes";

import classes from "./OrderForm.module.scss";
import OrderCheck from "./OrderCheck/OrderCheck";

const OrderForm = () => {
  const [isSaved, setSaved] = useState(false);
  const [orderFormValues, setInputFormValues] =
    useState<IOrderFormValues | null>(null);
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm<IOrderFormValues>({ mode: "onBlur" });

  const onSubmit = (data: IOrderFormValues) => {
    setSaved(true);
    setInputFormValues(data);
  };

  return (
    <div className={classes.orderFormWrapper}>
      <div className={classes.orderFormHeader}>
        <h2 className={classes.orderFormTitle}>Оформление заказа</h2>
      </div>
      {!isSaved ? (
        <form className={classes.orderForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.orderFormFlexWrapper}>
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
                color={colors.secondary}
                placeholder={"Ваше имя"}
                type={"text"}
              />
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорекктный номер телефона",
                    },
                    minLength: {
                      value: 13,
                      message: "Слишком короткий номер телефона",
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
          </div>
          {!isValid && (
            <div className={classes.orderFormError}>
              <span>
                {(isDirty && "Заполните все поля!") ||
                  (errors.phoneNumber?.message &&
                    "Некорекктный номер телефона")}
              </span>
            </div>
          )}
        </form>
      ) : (
        <OrderCheck orderFormValues={orderFormValues} setSaved={setSaved} />
      )}
    </div>
  );
};

export default OrderForm;
