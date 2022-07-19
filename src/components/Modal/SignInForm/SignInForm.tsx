import React, { FC, useState } from "react";

import { InputField, Button } from "../../common";

import VerificationForm from "../VerificationForm/VerificationForm";

import classes from "./SignInForm.module.scss";

interface SignInFormProps {
  setUserEnter: (value: boolean) => void;
}

const SignInForm: FC<SignInFormProps> = ({ setUserEnter }) => {
  const [isContinue, setContinue] = useState(false);
  const [signInForm, setSignInForm] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
  });

  const handleChange = (name: string) => (value: string) => {
    setSignInForm({ ...signInForm, [name]: value });
  };

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>Регистрация</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <InputField
                value={signInForm.name}
                placeholder={"Имя"}
                type={"phone"}
                onChange={handleChange("name")}
              />
            </div>
            <div className={classes.inputBlock}>
              <InputField
                value={signInForm.surName}
                placeholder={"Фамилия"}
                type={"phone"}
                onChange={handleChange("surName")}
              />
            </div>
            <div className={classes.inputBlock}>
              <InputField
                value={signInForm.phoneNumber}
                placeholder={"Номер телефона"}
                type={"phone"}
                onChange={handleChange("phoneNumber")}
              />
            </div>
            <div className={classes.modalCheckBox}>
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                <span>Я согласен с условиями публичной оферты</span>
              </label>
            </div>
            <div className={classes.modalButton}>
              <Button onClick={() => setContinue(true)}>Продолжить</Button>
            </div>
          </div>
          <div className={classes.modalError}>
            <span>error</span>
          </div>
        </form>
      ) : (
        <VerificationForm title="Регистрация" setUserEnter={setUserEnter} />
      )}
    </>
  );
};

export default SignInForm;
