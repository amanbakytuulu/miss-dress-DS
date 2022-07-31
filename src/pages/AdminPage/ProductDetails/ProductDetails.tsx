import React from "react";

import { ADMIN_PAGE_PRODUCTS, ADMIN_PAGE_USERS } from "../../../utils/path";

import SideBar from "../components/SideBar/SideBar";
import BackButton from "../components/BackButton/BackButton";
import Profile from "../components/Profile/Profile";

import classes from "./ProductsDetails.module.scss";

const ProductDetails = () => {
  return (
    <div className={classes.userDetails}>
      <SideBar />
      <div className={classes.userDetailsContainer}>
        <div className={classes.header}>
          <BackButton path={ADMIN_PAGE_PRODUCTS}>
            Вернуться ко всем товарам
          </BackButton>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.userDetailsContent}></div>
      </div>
    </div>
  );
};

export default ProductDetails;
