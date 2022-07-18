import React, { FC, useEffect, useState } from "react";

import { ReactComponent as SearchIcon } from "../../../assets/header/searchIcon.svg";
import { ReactComponent as FavIcon } from "../../../assets/header/favIcon.svg";
import { ReactComponent as CartIcon } from "../../../assets/header/cartIcon.svg";
import { ReactComponent as LoginIcon } from "../../../assets/header/loginIcon.svg";
import { ReactComponent as AccIcon } from "../../../assets/header/accountIcon.svg";

import HeaderNavProfile from "../HeaderNavProfile/HeaderNavProfile";

import SearchInput from "../../../components/SearchInput/SearchInput";

import CartItem from "../../../components/CartItem/CartItem";

import EmptyCart from "../components/EmptyCart/EmptyCart";

import classes from "./HeaderNavIcons.module.scss";

interface HeaderNavIconsProps {
  isModalOpen: boolean;
  isUserEnter: boolean;
  // openProfileNav: boolean;
  setModalOpen: (value: boolean) => void;
  // setOpenProfileNav: (value: boolean) => void;
}

const arr: any = [];

const HeaderNavIcons: FC<HeaderNavIconsProps> = ({
  setModalOpen,
  isModalOpen,
  isUserEnter,
}) => {
  const [openProfileNav, setOpenProfileNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className={classes.headerNavIcons}>
      <div className={classes.headerSearch}>
        <i className={classes.icon} onClick={() => setOpenSearch(!openSearch)}>
          <SearchIcon />
        </i>
        {openSearch && <SearchInput />}
      </div>
      <div className={classes.headerFav}>
        <i className={classes.icon}>
          <FavIcon />
        </i>
      </div>
      <div className={classes.headerCart}>
        <i className={classes.icon}>
          <CartIcon />
        </i>

        {arr.length ? (
          <div className={classes.headerCartList}>
            {arr.map((item: any) => {
              return <CartItem />;
            })}
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      {isUserEnter ? (
        <div
          className={classes.headerLogin}
          onClick={() => setModalOpen(!isModalOpen)}
        >
          <i className={classes.icon}>
            <LoginIcon />
          </i>
        </div>
      ) : (
        <div
          className={classes.headerAcc}
          onClick={() => setOpenProfileNav(!openProfileNav)}
        >
          <i className={classes.icon}>
            <AccIcon />
          </i>

          {openProfileNav && <HeaderNavProfile />}
        </div>
      )}
    </div>
  );
};

export default HeaderNavIcons;
