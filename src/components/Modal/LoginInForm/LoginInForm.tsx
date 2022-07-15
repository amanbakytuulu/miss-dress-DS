import React, { FC } from "react";
import { Button } from "@mui/material";

import classes from "./LoginInForm.module.scss";

interface LoginInFormProps {
  setSignIn: (value: boolean) => void;
}

const LoginInForm: FC<LoginInFormProps> = ({ setSignIn }) => {
  return (
    <form className={classes.modalForm} action="">
      <h3 className={classes.modalTitle}>Вход</h3>
      <div className={classes.modalFields}>
        <div className={classes.inputBlock}>
          <input type="text" />
        </div>
        <div className={classes.modalButton}>
          <Button>Войти</Button>
        </div>
        <button onClick={() => setSignIn(true)}>Зарегистрироваться</button>
      </div>
      <div className={classes.modalError}>
        <span>error</span>
      </div>
    </form>
  );
};

export default LoginInForm;
