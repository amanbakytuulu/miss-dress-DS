import { Grid } from "@mui/material";
import React, { useState } from "react";
import classes from "../style.module.scss";
import heartFull from "../../../../assets/mainPage/icons/heartfull.svg";
import StarsComponent from "./StarsComponent";
const ProductCard = ({ item }: any) => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <div>
      <Grid className={classes.bestsellerCard}>
        <img className={classes.bestsellerImg} src={item.img} alt="" />
        <div className={classes.priceDiv}>
          <div className={classes.priceP}>
            <p>{item.oldPrice}</p>
            <p>{item.newPrice}</p>
          </div>
          <div className={classes.colorDiv}>
            <img width={33} src={item.colors.img} alt="" />
            <p>{item.colors.count}</p>
          </div>
        </div>
        <p className={classes.titleP}>{item.title}</p>
        <p className={classes.sizeP}>{item.size}</p>
        <div className={classes.iconsDiv}>
          <div className={classes.startsDiv}>
            {item.stars.map((star: any, index: any) => (
              <StarsComponent star={star} index={index} />
            ))}
          </div>
          <div>
            <img
              onClick={() => setChangeColor(!changeColor)}
              width={43}
              src={changeColor ? heartFull : item.heart}
              alt=""
            />
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ProductCard;
