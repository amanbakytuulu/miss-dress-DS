import React, { useState } from "react";
import { Container, Grid } from "@mui/material";

import firstImg from "../../../../assets/mainPage/hits/first.png";
import secondImg from "../../../../assets/mainPage/hits/second.png";
import thirdImg from "../../../../assets/mainPage/hits/third.png";
import forthImg from "../../../../assets/mainPage/hits/forth.png";
import fifthImg from "../../../../assets/mainPage/hits/fifth.png";
import sixImg from "../../../../assets/mainPage/hits/six.png";
import fillIcon from "../../../../assets/mainPage/icons/fill.svg";
import start from "../../../../assets/mainPage/icons/Vector.svg";
import heart from "../../../../assets/mainPage/icons/heart.svg";

import classes from "../style.module.scss";

import ProductCard from "./ProductCard";

const Bestseller = () => {
  const [changeColor, setChangeColor] = useState(false);
  const bestsellerItems = [
    {
      img: fifthImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Envy Look All Season Skirt",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: sixImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Choper Shoulder Frill Vent Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: firstImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Envy Look Button Eco Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: thirdImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Benito Kate Wrap Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: forthImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Envy Look The Elle Linen Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: secondImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "JUSTONE Shy Embo Can Skirt",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
  ];
  return (
    <div className={classes.mainBestseller}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {bestsellerItems.map((item, index) => (
            <Grid key={index} item xs={6} md={4}>
              <ProductCard item={item} />
              {/* <Grid className={classes.bestsellerCard}>
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
                    {item.stars.map((star, index) => (
                      <img
                        key={index}
                        onClick={() => setChangeColor(!changeColor)}
                        width={43}
                        className={
                          changeColor ? classes.blackStar : classes.whiteStar
                        }
                        src={star}
                        alt=""
                      />
                    ))}
                  </div>
                  <div>
                    <img width={43} src={item.heart} alt="" />
                  </div>
                </div>
              </Grid> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Bestseller;
