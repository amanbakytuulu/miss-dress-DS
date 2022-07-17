import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import { ReactComponent as BurgerIcon } from "../../assets/header/burgerIcon.svg";
import {
  ABOUT_PAGE,
  CONTACTS_PAGE,
  DELIVERY_PAGE,
  NEWS_PAGE,
  PRODUCT_PAGE,
} from "../../utils/path";
import { MAIN_PAGE } from "../../utils/path";
import { IHeaderNav } from "../../types/headerTypes/headerTypes";

import { Modal } from "../../components";

import SignInForm from "../../components/Modal/SignInForm/SignInForm";
import LoginInForm from "../../components/Modal/LoginInForm/LoginInForm";

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
  const [isSignIn, setSignIn] = useState<boolean>(false);
  const [isUserEnter, setUserEnter] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  // const [openProfileNav, setOpenProfileNav] = useState(false);

  const handleClickLogo = () => navigate(MAIN_PAGE);

  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.container} ${classes.headerInner}`}>
          <div className={classes.leftSideBlock}>
            <div
              className={classes.burgerMenuBtn}
              onClick={() => setOpenBurger(!openBurger)}
            >
              <i>
                <BurgerIcon />
              </i>
            </div>
            <div className={classes.headerLogo} onClick={handleClickLogo}>
              <i>
                <LogoIcon />
              </i>
            </div>
          </div>

          <HeaderNav navItems={navItems} openBurger={openBurger} />
          <HeaderNavIcons
            isUserEnter={isUserEnter}
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </header>

      {!isSignIn ? (
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
          <LoginInForm setSignIn={setSignIn} setUserEnter={setUserEnter} />
        </Modal>
      ) : (
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
          <SignInForm setUserEnter={setUserEnter} />
        </Modal>
      )}
    </>
  );
};

export default Header;
