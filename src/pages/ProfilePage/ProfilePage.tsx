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
      <Breadcrumbs className={classes.navigation} aria-label="breadcrumb">
        <Link className={classes.link} to="/" title="Главная">
          Главная
        </Link>
        <Link className={classes.link} to="/" title="Профиль">
          Профиль
        </Link>
        <Typography></Typography>
      </Breadcrumbs>
      <Card sx={{ maxWidth: 345, display: "flex" }} >
        <CardMedia
          component="img"
          // height="140"
          image={profilePhoto}
          alt="green iguana"
        />
        <CardContent sx={{width:"300px"}}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </div >
  );
};

export default ProfilePage;
