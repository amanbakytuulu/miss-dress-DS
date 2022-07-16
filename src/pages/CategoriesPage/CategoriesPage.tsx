import React from "react";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import firstImg from "../../assets/mainPage/news/first.png";
import secondImg from "../../assets/mainPage/news/second.png";
import thirdImg from "../../assets/mainPage/news/third.png";
import forthImg from "../../assets/mainPage/news/six.png";
import fifthImg from "../../assets/mainPage/news/forth.png";
import sixImg from "../../assets/mainPage/news/fifth.png";
import fillIcon from "../../assets/mainPage/icons/fill.svg";
import start from "../../assets/mainPage/icons/Vector.svg";
import heart from "../../assets/mainPage/icons/heart.svg";

import ProductCard from "../../components/CheckBtn/ProductCard";

import SideBar from "../CategoriesPage/components/SideBar";

import classes from "./CategoryPage.module.scss";
import Select from "./components/Select";

const CategoryPage = () => {
  const btnTitle = "Открыть";

  const items = [
    {
      img: firstImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Choper X String Crop Tee",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: secondImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "LAGIRL Heart Jogger Pants",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: thirdImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "MOON Art String Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: forthImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "LIPHOP Knit Crop Vest",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: fifthImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "Benito Bell Shy Dress",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
    {
      img: sixImg,
      oldPrice: "7500",
      newPrice: "5990",
      title: "LEESLE Unisex Hanbok Chosun Pants Black",
      colors: {
        img: fillIcon,
        count: "5",
      },
      size: `Размер 29-49`,
      stars: [start, start, start, start, start],
      heart: heart,
    },
  ];
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
            {items.map((item: any) => (
              <div className={classes.prod}>
                <ProductCard btnTitle={btnTitle} item={item} />
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CategoryPage;
