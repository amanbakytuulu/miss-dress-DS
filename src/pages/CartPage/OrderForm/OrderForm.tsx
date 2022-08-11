import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/modalTypes/inputTypes";
import { IOrderFormValues } from "../../../types/cartPageTypes/orderFormTypes";

import {
  contactInfoApi,
  useAddContactInfoMutation,
} from "../../../store/features/Contact/ContactInfoQuery";

import { city, country, user } from "../../ProfilePage/types/types";

import OrderCheck from "./OrderCheck/OrderCheck";
import classes from "./OrderForm.module.scss";

const OrderForm = () => {
  const user: user = JSON.parse(localStorage.getItem("user") || "{}");
  const cities: city[] = JSON.parse(localStorage.getItem("city") || "[]");
  const countries: country[] = JSON.parse(
    localStorage.getItem("country") || "[]"
  );
  const [addContactInfo, { data, isSuccess }] = useAddContactInfoMutation();
  const [isSaved, setSaved] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [city, setCity] = useState((cities[0] && cities[0].title) || "");
  const [country, setCountry] = useState(
    (countries[0] && countries[0].title) || ""
  );

  const [orderFormValues, setInputFormValues] =
    useState<IOrderFormValues | null>(null);
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm<IOrderFormValues>({ mode: "onBlur" });

  const onSubmit = async (data: IOrderFormValues) => {
    await addContactInfo({
      firstName,
      lastName,
      phoneNumber,
      cityId: cities && cities[0].id,
      countryId: countries && countries[0].id,
    });
    setSaved(true);
    setInputFormValues(data);
  };

  useEffect(() => {
    localStorage.setItem("contactInfoId", data?.result?.id);
  }, [isSuccess]);

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
                  ...register("firstName", {
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
                onChange={setFirstName}
                value={firstName}
              />
              <InputField
                inputConfig={{
                  ...register("phoneNumber", {
                    required: "Поле обязательно к заполнению",
                    pattern: {
                      value: new RegExp("^\\+[0-9]{1}[0-9]{3,14}$"),
                      message: "Некорректный номер телефона",
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
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
              <InputField
                inputConfig={{
                  ...register("cityId", {
                    required: "Укажите Город",
                  }),
                }}
                color={colors.secondary}
                placeholder={"Город"}
                type={"text"}
                value={city}
                onChange={setCity}
              />
            </div>
            <div className={classes.orderFormRight}>
              <InputField
                inputConfig={{
                  ...register("lastName", {
                    required: "Укажите Фамилию",
                  }),
                }}
                color={colors.secondary}
                placeholder={"Ваша фамилия"}
                type={"text"}
                value={lastName}
                onChange={setLastName}
              />
              <InputField
                inputConfig={{
                  ...register("countryId", {
                    required: "Укажите Страну",
                  }),
                }}
                color={colors.secondary}
                placeholder={"Страна"}
                type={"text"}
                value={country}
                onChange={setCountry}
              />
              <Button type="submit">Сохранить</Button>
            </div>
          </div>
          {!isValid && (
            <div className={classes.orderFormError}>
              <span>
                {(errors.phoneNumber?.message &&
                  "Некорректный номер телефона") ||
                  (isDirty && "Заполните все поля!")}
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
