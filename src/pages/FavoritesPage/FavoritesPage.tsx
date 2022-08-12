import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import ProductCard from "../../components/ProductCard/ProductCard";

import Select from "../CategoriesPage/components/Select";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";
import { useFetchProductFavoritesQuery } from "../../store/features/Product/productFavorites/productFavoritesQuery";
import { IItemCard } from "../../components/ProductCard/types";

const FavoritesPage = () => {
  const btnTitle = "Открыть";
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    take: 6,
    page: 1,
    sort: "createDate",
  });

  const { data = [] } = useFetchProductFavoritesQuery(productsData);
  const items: IItemCard[] = data.result?.data || [];
  const totalCount: number = data?.result?.count;

  useEffect(() => {
    setProductsData({
      ...productsData,
      page: page,
    });
  }, [page]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      sort: sort,
    });
  }, [sort]);

  return (
    <div className={classes.mainDiv} style={{ marginTop: "22px" }}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className={classes.selectDiv}>
              <Link to="/">Главная</Link>
              <span>/</span>
              <Link to="/#">Избранное</Link>
            </div>
          </Grid>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div
              className={classes.selectBlock}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h2 className={classes.mediumH} style={{ fontSize: "28px" }}>
                Избранное
              </h2>
              <Select setSort={setSort} />
            </div>
            <div className={classes.responsiveH}>
              <h2>Избранное</h2>
            </div>
          </Grid>
          {items?.length !== 0 ? (
            items?.map((item, index: number) => (
              <Grid key={index} item xs={6} md={4}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </Grid>
            ))
          ) : (
            <div className={classes.empty}>Избранные пусто!</div>
          )}
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FavoritesPage;
