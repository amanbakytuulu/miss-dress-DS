import React from "react";
import { Container, Grid } from "@mui/material";

import jeans from "../../../../assets/mainPage/categories/second.png";
import dresses from "../../../../assets/mainPage/categories/first.png";
import skirts from "../../../../assets/mainPage/categories/third.png";

import classes from "../style.module.scss";
import ImagesCard from "../../../../components/ProductCard/components/ImagesCard";

const ProductsCategory = () => {
  const btnTitle = "Смотреть";
  const categoryItems = [
    {
      img: jeans,
      category: "Джинсы",
    },
    {
      img: dresses,
      category: "Платья",
    },
    {
      img: skirts,
      category: "Юбки",
    },
  ];

  return (
    <Grid container spacing={2}>
      {categoryItems.map((item, index) => (
        <Grid key={index} className={classes.categoryDiv} item xs={6} md={4}>
          <div className={classes.btnDiv}>
            <ImagesCard btnTitle={btnTitle} item={item} />
            <h4>{item.category}</h4>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCategory;
