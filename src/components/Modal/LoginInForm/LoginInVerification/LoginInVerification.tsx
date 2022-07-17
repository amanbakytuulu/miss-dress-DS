import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "../LoginInForm.module.scss";
import { ERROR_PAGE } from "../../../../utils/path";
import { useTimer } from "../../../../hooks/useTimer";

const LoginInVerification = () => {
  const [{ minutes, seconds }, restart] = useTimer(60);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    restart(60);
  };
  return (
    <form className={classes.modalForm} action="">
      <h3 className={classes.modalTitle}>Вход</h3>
      <div className={classes.modalFields}>
        <div className={classes.inputBlock}>
          <input type="text" />
        </div>
        <div className={classes.modalButton}>
          <Button>Подтвердить</Button>
        </div>
        <Link className={classes.modalSupport} to={ERROR_PAGE}>
          Не пришло SMS?
        </Link>
        <button onClick={handleClick}>
          Отправить снова <span>{minutes}</span>:<span>{seconds}</span>
        </button>
      </div>
      <div className={classes.modalError}>
        <span>error</span>
      </div>
    </form>
  );
};

export default LoginInVerification;
