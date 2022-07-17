import React, { FC, useState } from "react";
import { Button } from "@mui/material";

import VerificationForm from "../VerificationForm/VerificationForm";

import classes from "./SignInForm.module.scss";

interface SignInFormProps {
  setUserEnter: (value: boolean) => void;
}

const SignInForm: FC<SignInFormProps> = ({ setUserEnter }) => {
  const [isContinue, setContinue] = useState(false);
  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>Регистрация</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <input type="text" />
            </div>
            <div className={classes.inputBlock}>
              <input type="text" />
            </div>
            <div className={classes.inputBlock}>
              <input type="text" />
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
