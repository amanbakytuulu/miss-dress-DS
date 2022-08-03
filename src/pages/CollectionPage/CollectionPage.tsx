import React, { useState } from "react";

import { Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import jeans from "../../assets/mainPage/categories/second.png";
import dresses from "../../assets/mainPage/categories/first.png";
import skirts from "../../assets/mainPage/categories/third.png";
import pants from "../../assets/сollectionPage/pants.png";
import tops from "../../assets/сollectionPage/tops.png";
import pajamas from "../../assets/сollectionPage/pajamas.png";

import classes from "../CategoriesPage/CategoryPage.module.scss";

import CategoryPagination from "../../components/Pagination/CategoryPagination";
import Select from "../CategoriesPage/components/Select";
import SideBar from "../CategoriesPage/components/SideBar";

import { useFetchProductByCollectionTypeQuery } from "../../store/features/Product/productCategory/productCategoryQuery";

import { CategoryItem } from "./types/types";
import CollectionImagesCard from "./components/CollectionImagesCard";

const CollectionPage = () => {
  const btnTitle = "Смотреть";
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

  const { category = "" } = useParams<string>();
  const { data = [] } = useFetchProductByCollectionTypeQuery(category);
  const categories: CategoryItem[] = data?.result || [];
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
              <h2 className={classes.mediumH}>Коллекция</h2>
              <Select />
            </div>
          </Grid>
          <div className={classes.responsiveH}>
            <h2>Коллекция</h2>
          </div>
          {categories.length !== 0 ? (
            categories.map((item, index) => (
              <Grid item xs={6} sm={4} md={4} sx={{ mb: "30px" }}>
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
