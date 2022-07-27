import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import ProductCard from "../../components/ProductCard/ProductCard";

import Select from "../CategoriesPage/components/Select";
import { favoritesArray } from "../MainPage/Products/Data/db";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";

const FavoritesPage = () => {
  const btnTitle = "Открыть";
  const items = favoritesArray;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const totalCount = items.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.mainDiv} style={{ marginTop: "22px" }}>
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
              <h2 className={classes.mediumH}>Избранное</h2>
              <Select />
            </div>
            <div className={classes.responsiveH}>
              <h2>Избранное</h2>
            </div>
          </Grid>
          {currentPosts.map((item, index) => (
            <Grid key={index} item xs={6} md={4}>
              <ProductCard btnTitle={btnTitle} item={item} img={heartFull} />
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <CategoryPagination
              totalCount={totalCount}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageNumbers={pageNumbers}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FavoritesPage;
