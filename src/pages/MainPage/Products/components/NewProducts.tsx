import React from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";

import ProductCard from "../../../../components/ProductCard/ProductCard";
import { productGetAllApi } from "../../../../store/features/Product/productGetAll/ProductGetAllQuery";

const NewProducts = () => {
  const btnTitle = "Открыть";
  const { data = [], isLoading } =
    productGetAllApi.useFetchProductGetAllQuery(6);
  const newProductItems = data.result?.data || [];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={classes.mainBestseller}>
      <Grid container spacing={4}>
        {newProductItems.map((item: any, index: any) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={btnTitle} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewProducts;
