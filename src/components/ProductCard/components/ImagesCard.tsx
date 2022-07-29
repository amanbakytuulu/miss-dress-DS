import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "../style.module.scss";

import same3 from "../../../assets/ProductPage/same3.png";

const ImagesCard = ({ item, btnTitle, path }: any) => {
  const [changeColor, setColor] = useState(false);
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate(`/${path}`);
    setColor(!changeColor);
  };

  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={same3} alt="image" />
      <button
        style={{
          background: changeColor ? "#F1DAC5" : "#372e24",
        }}
        onClick={() => handleBtn()}
        className={classes.btn}
      >
        <Link
          style={{
            color: changeColor ? "#372E24" : "#F1DAC5",
            textDecoration: "none",
          }}
          to="{path}"
        >
          {btnTitle}
        </Link>
      </button>
    </Grid>
  );
};

export default ImagesCard;
