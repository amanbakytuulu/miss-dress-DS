import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import jeans from "../../assets/mainPage/categories/second.png";
import dresses from "../../assets/mainPage/categories/first.png";
import skirts from "../../assets/mainPage/categories/third.png";
import pants from "../../assets/сollectionPage/pants.png";
import tops from "../../assets/сollectionPage/tops.png";
import pajamas from "../../assets/сollectionPage/pajamas.png";
import ImagesCard from "../../components/ProductCard/components/ImagesCard";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import Select from "../CategoriesPage/components/Select";
import SideBar from "../CategoriesPage/components/SideBar";

const CollectionPage = () => {
  const btnTitle = "Открыть";
  const collectionItems = [
    {
      img: jeans,
      category: "Джинсы",
      path: "/jeans",
    },
    {
      img: dresses,
      category: "Платья",
      path: "/dresses",
    },
    {
      img: skirts,
      category: "Юбки",
      path: "/skirts",
    },
    {
      img: pants,
      category: "Брюки",
      path: "/pants",
    },
    {
      img: tops,
      category: "Топы",
      path: "/tops",
    },
    {
      img: pajamas,
      category: "Пижамы",
      path: "/pajamas",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = collectionItems.slice(indexOfFirstPost, indexOfLastPost);
  const totalCount = collectionItems.length;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.mainDiv} style={{ marginTop: "20px" }}>
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
              <h2 className={classes.mediumH}>Коллекции</h2>
              <Select />
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Коллекции</h2>
          </div>
          {currentPosts.map((item, index) => (
            <Grid item xs={6} sm={4} md={4}>
              <ImagesCard btnTitle={btnTitle} item={item} path={item.path} />
              <h4 style={{ textAlign: "center" }}>{item.category}</h4>
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

export default CollectionPage;