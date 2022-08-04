import React from "react";
import {
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import profilePhoto from "../../assets/profilePage/profilePhoto.png";

import classes from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div className={classes.profilePage}>
      <div className="container" style={{ padding: "0px 20px" }}>
        <Breadcrumbs className={classes.navigation} aria-label="breadcrumb">
          <Link className={classes.link} to="/" title="Главная">
            Главная
          </Link>
          <Link className={classes.link} to="/" title="Профиль">
            Профиль
          </Link>
          <Typography></Typography>
        </Breadcrumbs>
        <Card className={classes.profile}>
          <CardMedia
            component="img"
            className={classes.photo}
            image={profilePhoto}
            alt="green iguana"
          />
          <CardContent className={classes.content}>
            <p>Профиль</p>
            <input type="text" placeholder="Имя" disabled />
            <input type="text" placeholder="Фамилия" disabled />
            <input type="text" placeholder="Номер телефона" disabled />
            <button className={`${classes.btn}`}>Изменить номер</button>
            <p>Адрес доставки </p>
            <input type="text" placeholder="Страна" />
            <input type="text" placeholder="Город" />
            <button className={`${classes.btn} ${classes.btn__save}`}>
              Сохранить
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
