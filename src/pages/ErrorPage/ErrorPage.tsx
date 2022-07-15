import React from "react";
import classes from "./style.module.scss";
import errorImage from "../../assets/errorPage/error.png";
import logo from "../../assets/errorPage/logo.png";
const ErrorPage = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.logoDiv}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.errorDiv}>
        <img src={errorImage} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
