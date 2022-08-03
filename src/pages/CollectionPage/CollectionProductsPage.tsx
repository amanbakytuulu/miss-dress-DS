import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import Select from "../CategoriesPage/components/Select";
// import { dressesArray } from "../MainPage/Products/Data/db";

import { productGetAllApi } from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import classes from "../CategoriesPage/CategoryPage.module.scss";
import CategoryPagination from "../../components/Pagination/CategoryPagination";
import ImagesCard from "../../components/ProductCard/components/ImagesCard";

const CollectionProductsPage = () => {
  const btnTitle = "Открыть";
  // const dresses = dressesArray;
  const { data } = productGetAllApi.useFetchProductGetAllQuery(6);
  const dresses = data?.result.data;

  return (
    <div className={classes.mainDiv}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className={classes.selectDiv}>
              <Link to="/#">Главная</Link>
              <span>/</span>
              <Link to="/#">Товары</Link>
            </div>
          </Grid>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div className={classes.selectBlock}>
              <h2 className={classes.mediumH}>Платья</h2>
              <Select />
            </div>
          </Grid>

          <Grid container spacing={4}>
            {dresses.map((item: any, index: any) => (
              <Grid key={index} item xs={6} md={4}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={12}>
            <CategoryPagination />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CollectionProductsPage;
