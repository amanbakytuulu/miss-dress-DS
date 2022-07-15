import React from "react";
import { Container, Grid } from "@mui/material";

import firstImg from "../../../../assets/mainPage/news/first.png";
import secondImg from "../../../../assets/mainPage/news/second.png";
import thirdImg from "../../../../assets/mainPage/news/third.png";
import forthImg from "../../../../assets/mainPage/news/six.png";
import fifthImg from "../../../../assets/mainPage/news/forth.png";
import sixImg from "../../../../assets/mainPage/news/fifth.png";
import fillIcon from "../../../../assets/mainPage/icons/fill.svg";
import start from "../../../../assets/mainPage/icons/Vector.svg";
import heart from "../../../../assets/mainPage/icons/heart.svg";

import classes from "../style.module.scss";

import ProductCard from "./ProductCard";

const NewProducts = () => {
  const newProductItems = [
    {
      img: firstImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Choper X String Crop Tee",
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
      title: "LAGIRL Heart Jogger Pants",
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
      title: "MOON Art String Dress",
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
      title: "LIPHOP Knit Crop Vest",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: fifthImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Benito Bell Shy Dress",
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
      title: "LEESLE Unisex Hanbok Chosun Pants Black",
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
          {newProductItems.map((item, index) => (
            <Grid key={index} item xs={6} md={4}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default NewProducts;
