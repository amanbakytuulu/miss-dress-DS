import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Button, InputField } from "../../../components/common";
import { colors } from "../../../types/modalTypes/inputTypes";
import { IOrderFormValues } from "../../../types/cartPageTypes/orderFormTypes";

import classes from "./OrderForm.module.scss";
import OrderCheck from "./OrderCheck/OrderCheck";
import { useGetCountryQuery } from "../../../store/features/Country/CountryQuery";
import { useFetchUserMeQuery } from "../../../store/features/User/userMe/meQuery";
import { useGetCityQuery } from "../../../store/features/City/CityQuery";
import { useAddContactInfoMutation } from "../../../store/features/Contact/ContactInfoQuery";

const OrderForm = () => {
  const { data: me = {} } = useFetchUserMeQuery("");
  const { data: getCountry = [] } = useGetCountryQuery("");
  const { data: getCity = [] } = useGetCityQuery("");
  const [addContactInfo] = useAddContactInfoMutation();
  const [isSaved, setSaved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [orderFormValues, setInputFormValues] =
    useState<IOrderFormValues | null>(null);
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm<IOrderFormValues>({ mode: "onBlur" });

  const onSubmit = async (data: IOrderFormValues) => {
    // await addContactInfo(data);
    console.log(data);
    // setSaved(true);
    // setInputFormValues(data);
  };

  useEffect(() => {
    setFirstName(me.result?.firstName);
    setLastName(me.result?.lastName);
    setPhoneNumber(me.result?.phoneNumber);
    setCity(getCity[0]?.title);
    setCountry(getCountry[0]?.title);
  }, [])

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
