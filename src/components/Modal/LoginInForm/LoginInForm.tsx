import React, { FC, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import VerificationForm from "../VerificationForm/VerificationForm";

import { InputField, Button } from "../../common";

import {
  useLazyGetSmsCodeQuery,
  useUserLoginMutation,
} from "../../../store/authorization/Authorization";

import classes from "./LoginInForm.module.scss";

interface LoginInFormProps {
  setSignIn: (value: boolean) => void;
  setUserEnter: (value: boolean) => void;
}

type FormValues = {
  phoneNumber: string;
};

const LoginInForm: FC<LoginInFormProps> = ({ setSignIn, setUserEnter }) => {
  const [isContinue, setContinue] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [login, { data: loginData = null, isSuccess }] = useUserLoginMutation();
  const [getSms, { data: sms = null, isSuccess: isSmsSuccess }] =
    useLazyGetSmsCodeQuery();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onBlur" });

  const handleChange = (value: string) => {
    setPhoneNumber(value);
  };

  const onSubmit = (data: any) => {
    login({
      phoneNumber: phoneNumber,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      const id = loginData.result?.id;
      getSms(id);
    }
  }, [isSuccess, loginData]);

  useEffect(() => {
    if (isSmsSuccess) {
      sessionStorage.setItem("data", JSON.stringify(sms.result));
      setContinue(true);
    }
  }, [sms]);

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={classes.modalTitle}>Вход</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
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
                placeholder={"Введите номер телефона"}
                type={"tel"}
                onChange={handleChange}
                alignPlaceholder={true}
              />
            </div>
            <div className={classes.modalButtonBlock}>
              <Button type={"submit"}>Войти</Button>
            </div>
            <button
              className={classes.modalButtonSignIn}
              onClick={() => setSignIn(true)}
            >
              Зарегистрироваться
            </button>
          </div>
          <div className={classes.modalError}>
            {errors.phoneNumber && <span>{errors?.phoneNumber?.message}</span>}
          </div>
        </form>
      ) : (
        <VerificationForm title="Вход" setUserEnter={setUserEnter} />
      )}
    </>
  );
};

export default LoginInForm;
