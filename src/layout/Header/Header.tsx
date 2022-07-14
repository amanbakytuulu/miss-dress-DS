import React from "react";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerLogo}>
          <i>
            <LogoIcon />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;
