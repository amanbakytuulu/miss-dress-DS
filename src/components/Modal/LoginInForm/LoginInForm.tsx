import React, { FC, useState } from "react";

import { useForm, Resolver } from "react-hook-form";

import VerificationForm from "../VerificationForm/VerificationForm";

import { InputField, Button } from "../../common";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onBlur" });

  const handleChange = (name: string) => (value: string) => {
    setPhoneNumber(value);
  };

  const onSubmit = (data: any) => {
    setContinue(true);
  };

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
                onChange={handleChange("phoneNumber")}
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
