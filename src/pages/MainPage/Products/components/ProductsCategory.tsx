import React from "react";
import jeans from "../../../../assets/mainPage/categories/second.png";
import dresses from "../../../../assets/mainPage/categories/first.png";
import skirts from "../../../../assets/mainPage/categories/third.png";
import CheckBtn from "../../../../components/CheckBtn/CheckBtn";
import classes from "../style.module.scss";
import { Container, Grid } from "@mui/material";
const ProductsCategory = () => {
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
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {categoryItems.map((item,index) => (
          <Grid key={index} className={classes.categoryDiv} item xs={6} md={4}>
            <Grid className={classes.btnDiv}>
              <img className={classes.categoryImg} src={item.img} alt="" />
              <h4>{item.category}</h4>
              <CheckBtn />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsCategory;
