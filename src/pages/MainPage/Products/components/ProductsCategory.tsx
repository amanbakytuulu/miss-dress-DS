import React from "react";
import { Container, Grid } from "@mui/material";

import jeans from "../../../../assets/mainPage/categories/second.png";
import dresses from "../../../../assets/mainPage/categories/first.png";
import skirts from "../../../../assets/mainPage/categories/third.png";

import classes from "../style.module.scss";
import ImagesCard from "../../../../components/ProductCard/components/ImagesCard";
import { categoryMainApi } from "../../../../store/features/Category/categoryMain/categoryMainQuery";

const ProductsCategory = () => {
  const btnTitle = "Смотреть";

  const data = categoryMainApi.useFetchCategoryMainQuery(6);
  const categories = data?.data?.result.slice(0, 3);
  console.log(categories);

  return (
    <Grid container spacing={2}>
      {categories?.map((item: any, index: any) => (
        <Grid key={index} className={classes.categoryDiv} item xs={6} md={4}>
          <div className={classes.btnDiv}>
            <ImagesCard btnTitle={btnTitle} item={item} />
            <h4>{item.title}</h4>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCategory;
