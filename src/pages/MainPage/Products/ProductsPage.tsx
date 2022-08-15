import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Bestseller from "./components/Bestseller";
import NewProducts from "./components/NewProducts";
import ProductsCategory from "./components/ProductsCategory";

import classes from "./style.module.scss";

const ProductsPage = () => {
  return (
    <div className={classes.mainDiv}>
      <Container>
        <ProductsCategory />
        <div>
          <h2>Хит продаж</h2>
        </div>
        <Bestseller />
        <Link to="/categories">
          <button className={classes.btnAll}>Смотреть все хиты</button>
        </Link>
        <div>
          <h2>Новинки</h2>
        </div>
        <NewProducts />
        <Link to="/categories">
          <button className={classes.btnAll}>Смотреть все новинки</button>
        </Link>     
        </Container>
    </div>
  );
};

export default ProductsPage;
