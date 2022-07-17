import React, { FC, useState } from "react";
import { Button } from "@mui/material";

import classes from "./LoginInForm.module.scss";
import LoginInVerification from "./LoginInVerification/LoginInVerification";

interface LoginInFormProps {
  setSignIn: (value: boolean) => void;
}

const LoginInForm: FC<LoginInFormProps> = ({ setSignIn }) => {
  const [isContinue, setContinue] = useState(false);

  return (
    <>
      {!isContinue ? (
        <form className={classes.modalForm} action="">
          <h3 className={classes.modalTitle}>Вход</h3>
          <div className={classes.modalFields}>
            <div className={classes.inputBlock}>
              <input type="text" />
            </div>
            <div className={classes.modalButton}>
              <Button onClick={() => setContinue(true)}>Войти</Button>
            </div>
            <button onClick={() => setSignIn(true)}>Зарегистрироваться</button>
          </div>
          <div className={classes.modalError}>
            <span>error</span>
          </div>
        </form>
      ) : (
        <LoginInVerification />
      )}
    </>
  );
};

export default LoginInForm;
