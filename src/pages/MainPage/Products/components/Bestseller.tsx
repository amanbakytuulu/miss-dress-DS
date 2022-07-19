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

import ProductCard from "../../../../components/CheckBtn/ProductCard";

const Bestseller = () => {
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Bestseller;
