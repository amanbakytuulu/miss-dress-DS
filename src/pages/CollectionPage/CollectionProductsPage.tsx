import { Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import Select from "../CategoriesPage/components/Select";
// import { dressesArray } from "../MainPage/Products/Data/db";

import {
  productGetAllApi,
  useFetchProductByCategoryQuery,
} from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import { IItemCard } from "../../components/ProductCard/types";
import { Loader } from "../../utils/Loader/Loader";
import { Error } from "../../utils/Error/Error";

const CollectionProductsPage = () => {
  const btnTitle = "Открыть";
  const { category = "", type } = useParams<string>();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("createDate");
  const [productsData, setProductsData] = useState({
    categoryId: category,
    collectionType: type,
    take: 6,
    page: 1,
    sort: "createDate",
  });
  const {
    data = [],
    isLoading,
    isError,
  } = useFetchProductByCategoryQuery(productsData);
  const collectionItems: IItemCard[] = data.result?.data || [];
  const dressType = collectionItems[0]?.category?.title;
  const dresses: any = [];
  const totalCount = data?.result?.count;

  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  useEffect(() => {
    setProductsData({
      ...productsData,
      sort,
    });
  }, [sort]);

  if (isLoading) {
    return (
      <div
        style={{ paddingTop: "20%", minHeight: "70vh", background: "#fff2e3" }}
      >
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{ paddingTop: "20%", minHeight: "70vh", background: "#fff2e3" }}
      >
        <Error />
      </div>
    );
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
              <h2 className={classes.mediumH}>{dressType}</h2>
              <Select setSort={setSort} />
            </div>
          </Grid>

          <Grid container spacing={4}>
            {collectionItems.length > 0 ? (
              collectionItems.map((item, index) => (
                <Grid key={index} item xs={6} md={4}>
                  <ProductCard btnTitle={btnTitle} item={item} />
                </Grid>
              ))
            ) : (
              <div style={{ margin: "0 auto" }}>В категории пусто!</div>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CollectionProductsPage;
