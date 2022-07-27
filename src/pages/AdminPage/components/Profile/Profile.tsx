import React from "react";
import { Avatar } from "@mui/material";

import { ReactComponent as NotificationsIcon } from "../../../../assets/icons/notificationsIcon.svg";

import classes from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div className={classes.profileInfo}>
        <h5 className={classes.name}>Манки Д. Луффи</h5>
        <p className={classes.role}>Админ</p>
      </div>
      <i className={classes.icon}>
        <NotificationsIcon />
      </i>
    </div>
  );
};

export default Profile;
