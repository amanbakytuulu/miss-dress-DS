import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import {
  ABOUT_PAGE,
  CONTACTS_PAGE,
  DELIVERY_PAGE,
  NEWS_PAGE,
  PRODUCT_PAGE,
} from "../../utils/path";
import { MAIN_PAGE } from "../../utils/path";
import { IHeaderNav } from "../../types/headerTypes/headerTypes";

import HeaderNav from "./HeaderNav/HeaderNav";
import HeaderNavIcons from "./HeaderNavIcons/HeaderNavIcons";
import classes from "./Header.module.scss";

const navItems: IHeaderNav[] = [
  {
    title: "Товары",
    path: PRODUCT_PAGE,
  },
  {
    title: "О нас",
    path: ABOUT_PAGE,
  },
  {
    title: "Доставка",
    path: DELIVERY_PAGE,
  },
  {
    title: "Контакты",
    path: CONTACTS_PAGE,
  },
  {
    title: "Новости",
    path: NEWS_PAGE,
  },
];

const Header = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => navigate(MAIN_PAGE);

  return (
    <header className={classes.header}>
      <div className={`${classes.container} ${classes.headerInner}`}>
        <div className={classes.headerLogo} onClick={handleClickLogo}>
          <i>
            <LogoIcon />
          </i>
        </div>
        <HeaderNav navItems={navItems} />
        <HeaderNavIcons />
      </div>
    </header>
  );
};

export default Header;
