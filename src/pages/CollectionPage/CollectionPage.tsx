import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import Select from "../CategoriesPage/components/Select";

import { useFetchProductByCollectionTypeQuery } from "../../store/features/Product/productCategory/productCategoryQuery";

import { CategoryItem } from "./types/types";
import CollectionImagesCard from "./components/CollectionImagesCard";

const CollectionPage = () => {
  const btnTitle = "Смотреть";
  const [page, setPage] = useState(1);
  const { category = "" } = useParams<string>();
  const [productsData, setProductsData] = useState({
    category: category,
    page: 1,
  });
  const { data = [] } = useFetchProductByCollectionTypeQuery(productsData);
  const categories: CategoryItem[] = data?.result || [];
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = categories?.length;
  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  return (
    <div className={classes.mainDiv} style={{ marginTop: "20px" }}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid className={classes.mainGrid} container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className={classes.selectDiv}>
              <Link to="/">Главная</Link>
              <span>/</span>
              <Link to="/#">Коллекция</Link>
            </div>
          </Grid>
          <Grid className={classes.allProdBlock} item xs={12} sm={12} md={12}>
            <div className={classes.selectBlock}>
              <h2 className={classes.mediumH}>Коллекция</h2>
              {/* <Select /> */}
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Коллекция</h2>
          </div>
          {categories.length !== 0 ? (
            categories.map((item, index) => (
              <Grid
                key={item.category_id}
                item
                xs={6}
                sm={4}
                md={4}
                sx={{ mb: "30px" }}
              >
                <CollectionImagesCard
                  btnTitle={btnTitle}
                  item={item}
                  type={category}
                />
                <h4
                  style={{
                    fontWeight: 400,
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  {item.category_title}
                </h4>
              </Grid>
            ))
          ) : (
            <div style={{ margin: "0 auto" }}>В коллекции пусто!</div>
          )}
          <Grid item xs={12} md={12}>
            <CategoryPagination totalCount={totalCount} setPage={setPage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CollectionPage;
