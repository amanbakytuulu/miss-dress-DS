import React, { FC, useState } from "react";

import VerificationForm from "../VerificationForm/VerificationForm";

import { InputField, Button } from "../../common";

import classes from "./LoginInForm.module.scss";

interface LoginInFormProps {
  setSignIn: (value: boolean) => void;
  setUserEnter: (value: boolean) => void;
}

const LoginInForm: FC<LoginInFormProps> = ({ setSignIn, setUserEnter }) => {
  const [isContinue, setContinue] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (name: string) => (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setContinue(true);
  };

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>Вход</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                value={phoneNumber}
                placeholder={"Введите номер телефона"}
                type={"phone"}
                onChange={handleChange("phoneNumber")}
                alignPlaceholder={true}
              />
            </div>
            <div className={classes.modalButtonBlock}>
              <Button onClick={handleSubmit} type={"submit"}>
                Войти
              </Button>
            </div>
            <button
              className={classes.modalButtonSignIn}
              onClick={() => setSignIn(true)}
            >
              Зарегистрироваться
            </button>
          </div>
          <div className={classes.modalError}>
            <span>error</span>
          </div>
        </form>
      ) : (
        <VerificationForm title="Вход" setUserEnter={setUserEnter} />
      )}
    </>
  );
};

export default LoginInForm;
