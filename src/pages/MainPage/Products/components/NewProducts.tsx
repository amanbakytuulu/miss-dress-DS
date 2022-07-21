import React from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";

import ProductCard from "../../../../components/ProductCard/ProductCard";
import { dataArray } from "../Data/db";

const NewProducts = () => {
  const btnTitle = "Открыть";
  const newProductItems = dataArray;

  return (
    <div className={classes.mainBestseller}>
      <Grid container spacing={4}>
        {newProductItems.map((item, index) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={btnTitle} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewProducts;
