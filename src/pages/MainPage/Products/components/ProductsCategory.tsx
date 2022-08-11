import React from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";
import { categoryMainApi } from "../../../../store/features/Category/categoryMain/categoryMainQuery";

import { useFetchProductByCollectionTypeQuery } from "../../../../store/features/Product/productCategory/productCategoryQuery";

import CategoryImagesCard from "./CategoryImagesCard";

export interface ICategoryItems {
  createDate: string;
  id: number;
  status: number;
  title: string;
  updateDate: string;
}
const ProductsCategory = () => {
  const btnTitle = "Смотреть";
  const type = "summer";
  const data = categoryMainApi.useFetchCategoryMainQuery(6);
  const categories: ICategoryItems[] = data?.data?.result.slice(0, 3);
  const { data: category = [] } = useFetchProductByCollectionTypeQuery(type);
  const categoryItem = category.result || [];
  return (
    <Grid container spacing={2}>
      {categories?.map((item, index) => (
        <Grid key={index} className={classes.categoryDiv} item xs={6} md={4}>
          <div className={classes.btnDiv}>
            <CategoryImagesCard
              btnTitle={btnTitle}
              item={categoryItem[0] && categoryItem[0]}
              title={item.title}
              type={type}
            />
            <h4>{item.title}</h4>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsCategory;
