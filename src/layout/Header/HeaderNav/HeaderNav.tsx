import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { IHeaderNav } from "../../../types/headerTypes/headerTypes";

import { BURGER } from "../../../utils/modalHelper";

import classes from "./HeaderNav.module.scss";

interface NavItemsProps {
  navItems: IHeaderNav[];
  currentOpen: string | null;
}

const HeaderNav: FC<NavItemsProps> = ({ navItems, currentOpen }) => {
  return (
    <nav
      className={`${classes.headerNav} ${
        currentOpen === BURGER && classes.active
      }`}
    >
      <ul className={classes.headerNavInner}>
        {navItems.map((nav) => (
          <li key={nav.path}>
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
