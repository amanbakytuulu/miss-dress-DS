import React, { useState } from "react";
import { Button } from "@mui/material";

import leftArrow from "../../assets/CategoriesPage/left.svg";
import rightArrow from "../../assets/CategoriesPage/right.svg";

import classes from "./style.module.scss";

const CategoryPagination = ({
  pageNumbers,
  setCurrentPage,
  currentPage,
  postsPerPage,
  totalCount,
}: any) => {
  function scrollTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <ul className={classes.pagination}>
        <Button
          className={classes.arrowBtn}
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            scrollTop();
          }}
        >
          <img src={leftArrow} alt="" />
        </Button>
        {pageNumbers.map((item: any) =>
          item <= 4 ? (
            <Button
              variant="contained"
              className={
                currentPage === item ? classes.active : classes.notActive
              }
              onClick={() => {
                setCurrentPage(item);
                scrollTop();
              }}
              key={item}
            >
              {item}
            </Button>
          ) : null
        )}
        {pageNumbers.length > 4 && (
          <Button className={classes.arrowBtn}>...</Button>
        )}

        <Button
          className={classes.arrowBtn}
          disabled={Math.ceil(totalCount / postsPerPage) === currentPage}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            scrollTop();
          }}
        >
          <img src={rightArrow} alt="" />
        </Button>
      </ul>
    </div>
  );
};

export default CategoryPagination;
