import React from "react";

import errorBg from "../../assets/errorPage/errorBg1.jpg";
import { BreadCrumbs } from "../../utils/BreadCrumbs/BreadCrumbs";

import classes from "./style.module.scss";

const ErrorPage = () => {
  const links = [
    { title: "Главная", path: "/" },
    { title: "Профиль", path: "/profile" },
  ];

  return (
    <div className={classes.mainDiv}>
      <BreadCrumbs links={links} />
      <div className={classes.errorDiv}>
        <img width="70%" src={errorBg} alt="error" />
      </div>
    </div>
  );
};

export default ErrorPage;
