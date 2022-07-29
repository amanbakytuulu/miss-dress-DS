import React, { useState } from "react";
import { Grid } from "@mui/material";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";

import classes from "./style.module.scss";

import ImagesCard from "./components/ImagesCard";
import StarsComponent from "./components/StarsComponent";
import Description from "./components/Description";
import { IProductCard } from "./types";

const ProductCard = ({ item, btnTitle }: IProductCard) => {
  const [changeColor, setChangeColor] = useState(false);

  return (
    <Grid className={classes.bestsellerCard}>
      <ImagesCard btnTitle={btnTitle} item={item} />
      <Description item={item} />
      <div className={classes.iconsDiv}>
        {/* <div className={classes.startsDiv}>
          {item.stars.map((star: any, index: any) => (
            <StarsComponent star={star} index={index} />
          ))}
        </div> */}
        <div>
          {/*  {item.isFav ? 
         <img
           onClick={() => removeFromFav(item)}
           width={43}
           src={changeColor ? heartFull : item.heart}
           alt=""
         /> :
         <img
         onClick={() => addToFav(item)}
         width={43}
         src={changeColor ? heartFull : item.heart}
         alt=""
         />
          } */}
          <img
            onClick={() => setChangeColor(!changeColor)}
            width={43}
            src={changeColor ? heartFull : heartFull}
            alt=""
          />
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
