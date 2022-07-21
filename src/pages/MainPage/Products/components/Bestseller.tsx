import React, { useState } from "react";
import { Container, Grid } from "@mui/material";

import classes from "../style.module.scss";

import ProductCard from "../../../../components/ProductCard/ProductCard";
import { bestsellerArray } from "../Data/db";

const Bestseller = () => {
  const btnTitle = "Открыть";
  const bestsellerItems = bestsellerArray;
  return (
    <div className={classes.mainBestseller}>
      <Grid container spacing={4}>
        {bestsellerItems.map((item, index) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={btnTitle} item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Bestseller;
