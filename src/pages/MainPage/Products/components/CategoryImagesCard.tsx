import React, { useState } from "react";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

import same3 from "../../../../assets/ProductPage/same3.png";

import { CategoryItem } from "../../../CollectionPage/types/types";

import classes from "./CategoryImagesCard.module.scss";
import { ICategoryItems } from "./ProductsCategory";

interface CategoryImagesCardProps {
  item: CategoryItem;
  btnTitle: string;
  type: string;
  title: string;
}

function CategoryImagesCard({
  item,
  btnTitle,
  type,
  title,
}: CategoryImagesCardProps) {
  const [changeColor] = useState(false);
  console.log(title);

  return (
    <Grid className={classes.btnDiv}>
      <img className={classes.categoryImg} src={same3} alt="image" />
      <Link
        style={{
          color: changeColor ? "#372E24" : "#F1DAC5",
          textDecoration: "none",
        }}
        to={
          title === item.category_title
            ? `/dresses/category=${item.category_id}/collectionType=${type}`
            : `/dresses/category=${item.category_id}/collectionType=summer`
        }
      >
        <button
          style={{
            background: changeColor ? "#F1DAC5" : "#372e24",
          }}
          className={classes.btn}
        >
          {btnTitle}
        </button>
      </Link>
    </Grid>
  );
}

export default CategoryImagesCard;
