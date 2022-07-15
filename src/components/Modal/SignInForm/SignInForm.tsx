import React from "react";
import { Button } from "@mui/material";

import classes from "./SignInForm.module.scss";

const SignInForm = () => {
  return (
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
          <Button>Продолжить</Button>
        </div>
      </div>
      <div className={classes.modalError}>
        <span>error</span>
      </div>
    </form>
  );
};

export default SignInForm;
