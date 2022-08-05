import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import heartFull from "../../assets/mainPage/icons/heartfull.svg";
import heart from "../../assets/mainPage/icons/heart.svg";
import {
  useAddProductFavoritesMutation,
  useFetchProductFavoritesQuery,
} from "../../store/features/Product/productFavorites/productFavoritesQuery";

import classes from "./style.module.scss";

import ImagesCard from "./components/ImagesCard";
import StarsComponent from "./components/StarsComponent";
import Description from "./components/Description";
import { IItemCard, IProductCard } from "./types";

const ProductCard = ({ item, btnTitle }: IProductCard) => {
  const [addProductFavorites] = useAddProductFavoritesMutation();
  const { data = [] } = useFetchProductFavoritesQuery("");
  const items: IItemCard[] = data.result?.data || [];
  const [changeColor, setChangeColor] = useState(false);
  const handleAddFavorite = () => {
    addProductFavorites(item);
    setChangeColor(!changeColor);
  };
  useEffect(() => {
    if (items.length !== 0) {
      setChangeColor(items.some((el) => el.id === item.id));
    }
  }, [items]);
  return (
    <Grid className={classes.bestsellerCard}>
      <ImagesCard btnTitle={btnTitle} item={item} />
      <Description item={item} />
      <div className={classes.iconsDiv}>
        <div>
          <img
            onClick={handleAddFavorite}
            width={43}
            src={changeColor ? heartFull : heart}
            alt=""
          />
        </div>
      </div>
    </Grid>
  );
};

export default ProductCard;
