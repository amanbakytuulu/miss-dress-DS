import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

// import firstImg from "../../assets/mainPage/news/first.png";
// import secondImg from "../../assets/mainPage/news/second.png";
// import thirdImg from "../../assets/mainPage/news/third.png";
// import forthImg from "../../assets/mainPage/news/six.png";
// import fifthImg from "../../assets/mainPage/news/forth.png";
// import sixImg from "../../assets/mainPage/news/fifth.png";
// import fillIcon from "../../assets/mainPage/icons/fill.svg";
// import start from "../../assets/mainPage/icons/Vector.svg";
// import heart from "../../assets/mainPage/icons/heart.svg";

import ProductCard from "../../components/ProductCard/ProductCard";

import SideBar from "../CategoriesPage/components/SideBar";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
// import { dataArray } from "../MainPage/Products/Data/db";
import { productGetAllApi } from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import Select from "./components/Select";

import classes from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const btnTitle = "Открыть";
  const { data } = productGetAllApi.useFetchProductGetAllQuery(6);
  const items = data?.result.data;

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items?.slice(indexOfFirstPost, indexOfLastPost);
  const totalCount = items?.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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
              <h2 className={classes.mediumH}>Все товары</h2>
              <div className={classes.selectCatDiv}>
                <SideBar />
              </div>
              <Select />
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Все товары</h2>
          </div>
          <Grid
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
            item
            xs={6}
            sm={4}
            md={4}
          >
            <SideBar />
          </Grid>
          <Grid className={classes.productDiv} item xs={10} sm={8} md={8}>
            {currentPosts?.map((item: any) => (
              <div className={classes.prod}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </div>
            ))}
          </Grid>
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

export default CategoryPage;
