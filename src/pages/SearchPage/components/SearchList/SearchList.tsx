import React, { FC } from "react";
import { Grid } from "@mui/material";

import { ProductCard, Pagination } from "../../../../components";

import { IItemCard } from "../../../../components/ProductCard/types";

import classes from "./SearchList.module.scss";

interface SearchListProps {
  searchList: IItemCard[];
  totalCount: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  pageNumbers: any;
}

const SearchList: FC<SearchListProps> = ({
  searchList,
  totalCount,
  postsPerPage,
  currentPage,
  setCurrentPage,
  pageNumbers,
}) => {
  return (
    <div className={classes.SearchList}>
      <Grid container spacing={4}>
        {searchList.map((item, index: number) => (
          <Grid key={index} item xs={6} md={4}>
            <ProductCard btnTitle={"Открыть"} item={item} />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Pagination
            totalCount={totalCount}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageNumbers={pageNumbers}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchList;
