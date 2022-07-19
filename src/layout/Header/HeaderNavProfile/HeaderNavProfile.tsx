import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ORDERS_PAGE, PROFILE_PAGE } from "../../../utils/path";

import classes from "./HeaderNavProfile.module.scss";

const navs = [
  {
    title: "Профиль",
    path: PROFILE_PAGE,
  },
  {
    title: "Заказы",
    path: ORDERS_PAGE,
  },
  {
    title: "Выйти",
  },
];

const HeaderNavProfile = () => {
  return (
    <div className={classes.headerProfileNav}>
      <ul>
        {navs.map((nav) => {
          return (
            <li key={nav.title}>
              {nav?.path ? (
                <Link to={nav.path}>{nav.title}</Link>
              ) : (
                <button>{nav.title}</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderNavProfile;
