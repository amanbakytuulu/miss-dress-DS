import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IHeaderNav } from "../../../types/headerTypes/headerTypes";

import classes from "./HeaderNav.module.scss";

interface NavItemsProps {
  navItems: IHeaderNav[];
}

const HeaderNav: FC<NavItemsProps> = ({ navItems }) => {
  return (
    <nav className={classes.headerNav}>
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
