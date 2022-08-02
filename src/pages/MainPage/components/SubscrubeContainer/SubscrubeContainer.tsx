import React, { useState } from "react";
import { useForm } from "react-hook-form";

import classes from "../SubscrubeContainer/SubscrubeContainer.module.scss";

import { InputField } from "../../../../components/common";

import { colors } from "../../../../types/modalTypes/inputTypes";

import ButtonImage from "../Button/Button";

// import SubscrubeComponents from "./SubscrubeComponents/SubscrubeComponents";
import SubscrubeList from "./SubscrubeComponents/SubscrubeList";

import { newsDb } from "./newsDb";
type SubscribeFormTypes = {
  fullName: string;
  phoneNumber: string;
  category: string;
};

const SubscrubeContainer = () => {
  const [name, setName] = useState<string>("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubscribeFormTypes>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: SubscribeFormTypes) => {
    newsDb.push({ ...data, category: name });
    console.log(newsDb);
    // console.log({ ...data, category: name });
  };
  const getValue = (value: string) => {
    setName(value);
  };
  // const submit = () => {
  //   console.log(name);
  // };

  return (
    <>
      <div className={classes.image}>
        <div className={classes.image__flex}>
          <div className={classes.image__item}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className={classes.image__h3}>
                Оформить подписку
                <div className={classes.inputBlock}>
                  <InputField
                    color={colors.subscribeInput}
                    inputConfig={{
                      ...register("fullName", {
                        required: "Поле обязательно к заполнению",
                      }),
                    }}
                    placeholder="Ваше Ф.И.О."
                    type={"text"}
                  />
                </div>
                <div className={classes.inputBlock}>
                  <InputField
                    color={colors.subscribeInput}
                    inputConfig={{
                      ...register("phoneNumber", {
                        required: "Поле обязательно к заполнению",
                      }),
                    }}
                    placeholder="Номер телефона"
                    type={"text"}
                  />
                </div>
                <SubscrubeList
                  onChange={getValue}
                  inputConfig={{
                    ...register("category"),
                  }}
                  type={"text"}
                />
                <div className={classes.error}>
                  <span>
                    {(errors.fullName?.message && "Заполните Ф.И.О") ||
                      (errors.phoneNumber?.message &&
                        "Заполните номер телефона")}
                  </span>
                </div>
                <ButtonImage>Продолжить</ButtonImage>
              </h3>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscrubeContainer;
