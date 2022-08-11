import React from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";

import ProductCard from "../../../../components/ProductCard/ProductCard";
import { productGetAllApi } from "../../../../store/features/Product/productGetAll/ProductGetAllQuery";
import { Loader } from "../../../../utils/Loader/Loader";
import { Error } from "../../../../utils/Error/Error";

const NewProducts = () => {
  const btnTitle = "Открыть";
  const {
    data = [],
    isLoading,
    isError,
  } = productGetAllApi.useFetchProductGetAllQuery({
    take: 6,
    sort: "updateDate",
  });
  const newProductItems = data.result?.data || [];

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
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
