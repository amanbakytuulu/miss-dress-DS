import React, { useState } from "react";
import { Grid } from "@mui/material";

import fifthImg from "../../assets/mainPage/news/forth.png";
import fillIcon from "../../assets/mainPage/icons/fill.svg";
import start from "../../assets/mainPage/icons/Vector.svg";
import heart from "../../assets/mainPage/icons/heart.svg";
import sixImg from "../../assets/mainPage/news/fifth.png";
import firstImg from "../../assets/mainPage/news/first.png";
import thirdImg from "../../assets/mainPage/news/third.png";
import forthImg from "../../assets/mainPage/news/six.png";
import secondImg from "../../assets/mainPage/news/second.png";

import { Pagination } from "../../components";

import SearchList from "./components/SearchList/SearchList";
import SearchHeader from "./components/SearchHeader/SearchHeader";

import classes from "./SearchPage.module.scss";
import OthersProducts from "./components/OthersProducts/OthersProducts";

const bestsellerArray = [
  {
    img: fifthImg,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Envy Look All Season Skirt",
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
    title: "Choper Shoulder Frill Vent Dress",
    colors: {
      img: fillIcon,
      count: "5",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
  {
    img: firstImg,
    oldPrice: "7500",
    newPrice: "5990",
    title: "Envy Look Button Eco Dress",
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
    title: "Benito Kate Wrap Dress",
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
    title: "Envy Look The Elle Linen Dress",
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
    title: "JUSTONE Shy Embo Can Skirt",
    colors: {
      img: fillIcon,
      count: "5",
    },
    size: `Размер 29-49`,
    stars: [start, start, start, start, start],
    heart: heart,
  },
];
const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = bestsellerArray.slice(indexOfFirstPost, indexOfLastPost);
  const totalCount = bestsellerArray.length;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={classes.searchPageWrapper}>
      <div className={`${classes.container} ${classes.searchPageContainer}`}>
        <SearchHeader quantity={totalCount} />

        {bestsellerArray.length < 0 ? (
          <SearchList
            searchList={currentPosts}
            totalCount={totalCount}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageNumbers={pageNumbers}
          />
        ) : (
          <OthersProducts slides={bestsellerArray} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
