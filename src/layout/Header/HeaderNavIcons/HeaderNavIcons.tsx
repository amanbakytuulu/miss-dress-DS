import React from "react";

import { ReactComponent as SearchIcon } from "../../../assets/header/searchIcon.svg";
import { ReactComponent as FavIcon } from "../../../assets/header/favIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/header/cartIcon.svg";
import { ReactComponent as AccIcon } from "../../../assets/header/loginIcon.svg";

import classes from "./HeaderNavIcons.module.scss";

const HeaderNavIcons = () => {
  return (
    <div className={classes.headerNavIcons}>
      <div className={classes.headerSearch}>
        <i>
          <SearchIcon />
        </i>
      </div>
      <div className={classes.headerFav}>
        <i>
          <FavIcon />
        </i>
      </div>
      <div className={classes.headerCart}>
        <i>
          <CartIcon />
        </i>
      </div>
      <div className={classes.headerAcc}>
        <i>
          <AccIcon />
        </i>
      </div>
    </div>
  );
};

export default HeaderNavIcons;
