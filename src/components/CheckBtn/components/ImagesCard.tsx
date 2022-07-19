import { Grid } from "@mui/material";
import React from "react";

import classes from "../style.module.scss";

const ImagesCard = ({ item }: any) => {
  const title = "Смотреть";
  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={item.img} alt="" />
      <button className={classes.btn}>{title}</button>
    </Grid>
  );
};

export default ImagesCard;
