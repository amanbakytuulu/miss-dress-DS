import React from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";
import ImagesCard from "../../../../components/ProductCard/components/ImagesCard";
import { categoryMainApi } from "../../../../store/features/Category/categoryMain/categoryMainQuery";

interface ICategoryItems {
  img: string;
  category: string;
}
const ProductsCategory = () => {
  const btnTitle = "Смотреть";

  const data = categoryMainApi.useFetchCategoryMainQuery(6);

  const categories = data?.data?.result.slice(0, 3);
  
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
