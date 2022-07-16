import { Grid } from "@mui/material";
import React, { useState } from "react";

import classes from "../style.module.scss";

const ImagesCard = ({ item, btnTitle }: any) => {
  const [changeColor, setColor] = useState(false);
  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={item.img} alt="" />
      <button
        style={{ background: changeColor ? "#F1DAC5" : "#372e24" }}
        onClick={() => setColor(!changeColor)}
        className={classes.btn}
      >
        {btnTitle}
      </button>
    </Grid>
  );
};

export default ImagesCard;
