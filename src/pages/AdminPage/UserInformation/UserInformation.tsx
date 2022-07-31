import React from "react";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import BackButton from "../components/BackButton/BackButton";
import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";

import classes from "./UserInformation.module.scss";

const UserInformation = () => {
  return (
    <div className={classes.userInformation}>
      <SideBar />
      <div className={classes.userInformationContainer}>
        <div className={classes.header}>
          <BackButton path={ADMIN_PAGE_USERS}>
            Вернуться ко всем пользователям
          </BackButton>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.userInformationContent}>
          <div className={classes.infoBlock}>
            <h3 className={classes.infoTitle}>Информация о пользователе</h3>
            <ul className={classes.listOfInfo}>
              <li>
                <strong>Пользователь</strong>
                <span>Ророноа Зоро</span>
              </li>
              <li>
                <strong>Адрес почты</strong>
                <span>zoro@gmail.com</span>
              </li>
              <li>
                <strong>Номер телефона</strong>
                <span>+996712345678</span>
              </li>
              <li>
                <strong>Адрес</strong>
                <span>Кыргызстан, г. Бишкек</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
