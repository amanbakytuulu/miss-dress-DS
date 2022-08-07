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
import ImagesCard from "../../components/ProductCard/components/ImagesCard";
import { IProductCardCollection } from "../../components/ProductCard/types";

const CollectionProductsPage = () => {
  const btnTitle = "Открыть";
  const { category, type } = useParams<string>();
  const [page, setPage] = useState(1);
  const [productsData, setProductsData] = useState({
    categoryId: category,
    collectionType: type,
    take: 6,
    page: 1,
  });
  const { data = [] } = useFetchProductByCategoryQuery(productsData);
  const collectionItems: IProductCardCollection[] = data.result?.data || [];
  const dressType = collectionItems[0]?.category?.title;
  const dresses: any = [];
  const totalCount = data?.result?.count;

  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

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
              <Select />
            </div>
          </Grid>

          <Grid container spacing={4}>
            {collectionItems.map((item, index) => (
              <Grid key={index} item xs={6} md={4}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </Grid>
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

export default CollectionProductsPage;
