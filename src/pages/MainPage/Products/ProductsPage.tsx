import { Container, Grid } from "@mui/material";
import React from "react";
import Bestseller from "./components/Bestseller";
import NewProducts from "./components/NewProducts";
import ProductsCategory from "./components/ProductsCategory";
import classes from "./style.module.scss";
const ProductsPage = () => {
  return (
    <div className={classes.mainDiv}>
      <ProductsCategory />
      <div>
          <h2>Хит продаж</h2>
      </div>
      <Bestseller />
      <button className={classes.btnAll}>Смотреть все хиты</button>
      <div>
          <h2>Новинки</h2>
      </div>
      <NewProducts/>
      <button className={classes.btnAll}>Смотреть все новинки</button>

    </div>
  );
};

export default ProductsPage;
