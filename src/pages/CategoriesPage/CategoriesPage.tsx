import React, { useEffect, useState } from "react";

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
import {
  productGetAllApi,
  useFetchProductsByCategoryQuery,
} from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import CategoriesDropdown from "./components/CategoriesDropdown";

import Select from "./components/Select";

import classes from "./CategoryPage.module.scss";

const CategoryPage = () => {
  const btnTitle = "Открыть";
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    take: 6,
    category: 1,
    page: 1,
    sort: "createDate",
  });
  const { data } = productGetAllApi.useFetchProductsGetAllQuery(productsData);
  const { data: productsByCategory } =
    useFetchProductsByCategoryQuery(category);
  const items = data?.result.data;
  const totalCount: number = productsByCategory?.result.count;
  console.log(productsData);

  useEffect(() => {
    setProductsData({ ...productsData, category: category });
  }, [category]);

  useEffect(() => {
    setProductsData({ ...productsData, page: page });
  }, [page]);

  useEffect(() => {
    setProductsData({ ...productsData, sort: sort });
  }, [sort]);

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
              <CategoriesDropdown />
              <Select setSort={setSort} />
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
            <SideBar setCategory={setCategory} />
          </Grid>
          <Grid className={classes.productDiv} item xs={10} sm={8} md={8}>
            {items?.map((item: any) => (
              <div className={classes.prod}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </div>
            ))}
          </Grid>
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CategoryPage;
