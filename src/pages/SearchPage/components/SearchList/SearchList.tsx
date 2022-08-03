import React, { FC } from "react";
import { Grid } from "@mui/material";

import { ProductCard, Pagination } from "../../../../components";

import { IItemCard } from "../../../../components/ProductCard/types";

import classes from "./SearchList.module.scss";

interface SearchListProps {
  searchList: IItemCard[];
}

const SearchList: FC<SearchListProps> = ({ searchList }) => {
  return (
    <div className={classes.SearchList}>
      <Grid container spacing={4}>
        {searchList.map((item, index: number) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={"Открыть"} item={item} />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Pagination />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchList;
