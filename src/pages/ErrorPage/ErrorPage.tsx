import React from "react";

import errorImage from "../../assets/errorPage/error.png";
import logo from "../../assets/errorPage/logo.png";
import miss from "../../assets/errorPage/MissDress.png";

import classes from "./style.module.scss";

const ErrorPage = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.logoDiv}>
        <img width="20%" src={miss} alt="" />
        <img width="15%" src={logo} alt="" />
      </div>
      <div className={classes.errorDiv}>
        <img width="70%" src={errorImage} alt="" />
        {/* <div className={classes.upsDiv}>
          <h2>Упс, Страница не найдена!</h2>
          <h1>404</h1>
        </div> */}
      </div>
    </div>
  );
};

export default ErrorPage;
