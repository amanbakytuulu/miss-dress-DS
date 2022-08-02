import React, { useState } from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";

import ProductCard from "../../../../components/ProductCard/ProductCard";

import { productGetAllApi } from "../../../../store/features/Product/productGetAll/ProductGetAllQuery";

const Bestseller = () => {
  const btnTitle = "Открыть";

  const { data } = productGetAllApi.useFetchProductGetAllQuery(6);
  const products = data?.result.data;

  return (
    <div className={classes.mainBestseller}>
      <Grid container spacing={4}>
        {products?.map((item: any, index: any) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={btnTitle} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Bestseller;
