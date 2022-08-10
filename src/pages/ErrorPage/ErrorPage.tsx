import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import errorBg from "../../assets/errorPage/errorBg1.jpg";

import classes from "./style.module.scss";

const ErrorPage = () => {
  return (
    <div className={classes.mainDiv}>
      <Breadcrumbs className={classes.errorNav} aria-label="breadcrumb">
        <Link className={classes.link} to="/" title="Главная">
          Главная
        </Link>
        <Typography></Typography>
      </Breadcrumbs>
      <div className={classes.errorDiv}>
        <img width="70%" src={errorBg} alt="error" />
      </div>
    </div>
  );
};

export default ErrorPage;
