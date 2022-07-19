import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FAVORITES_PAGE } from "../../../utils/path";

import { ReactComponent as SearchIcon } from "../../../assets/header/searchIcon.svg";
import { ReactComponent as FavIcon } from "../../../assets/header/favIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/header/cartIcon.svg";
import { ReactComponent as LoginIcon } from "../../../assets/header/loginIcon.svg";
import { ReactComponent as AccIcon } from "../../../assets/header/accountIcon.svg";

import HeaderNavProfile from "../HeaderNavProfile/HeaderNavProfile";

import SearchInput from "../../../components/SearchInput/SearchInput";

import CartItem from "../../../components/CartItem/CartItem";

import EmptyCart from "../components/EmptyCart/EmptyCart";

import { IOpen } from "../../../types/headerTypes/headerTypes";
import {
  CART_LIST,
  MODAL,
  PROFILE_NAV,
  SEARCH,
} from "../../../utils/helpers/modalHelper";

import classes from "./HeaderNavIcons.module.scss";

interface HeaderNavIconsProps {
  isUserEnter: boolean;
  currentOpen: string | null;
  toggleCurrent: (value: string) => () => void;
}

const arr: any = [];

const HeaderNavIcons: FC<HeaderNavIconsProps> = ({
  isUserEnter,
  toggleCurrent,
  currentOpen,
}) => {
  return (
    <div className={classes.headerNavIcons}>
      <div className={classes.headerSearch}>
        <i className={classes.icon} onClick={toggleCurrent(SEARCH)}>
          <SearchIcon />
        </i>
        {currentOpen === SEARCH && <SearchInput />}
      </div>
      <div className={classes.headerFav}>
        <Link to={FAVORITES_PAGE}>
          <i className={classes.icon}>
            <FavIcon />
          </i>
        </Link>
      </div>
      <div className={classes.headerCart}>
        <i className={classes.icon} onClick={toggleCurrent(CART_LIST)}>
          <CartIcon />
        </i>

        {currentOpen === CART_LIST && (
          <>
            {arr.length ? (
              <div className={classes.headerCartList}>
                {arr.map((item: any) => {
                  return <CartItem />;
                })}
              </div>
            ) : (
              <EmptyCart />
            )}
          </>
        )}
      </div>
      {!isUserEnter ? (
        <div className={classes.headerLogin}>
          <i className={classes.icon} onClick={toggleCurrent(MODAL)}>
            <LoginIcon />
          </i>
        </div>
      ) : (
        <div className={classes.headerAcc}>
          <i className={classes.icon} onClick={toggleCurrent(PROFILE_NAV)}>
            <AccIcon />
          </i>

          {currentOpen === PROFILE_NAV && <HeaderNavProfile />}
        </div>
      )}
    </div>
  );
};

export default HeaderNavIcons;
