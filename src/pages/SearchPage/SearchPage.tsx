import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

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

import {
  useFetchProductBytitleQuery,
  useFetchProductGetAllQuery,
} from "../../store/features/Product/productGetAll/ProductGetAllQuery";

import SearchList from "./components/SearchList/SearchList";
import SearchHeader from "./components/SearchHeader/SearchHeader";

import classes from "./SearchPage.module.scss";
import OthersProducts from "./components/OthersProducts/OthersProducts";

const SearchPage = () => {
  const { title } = useParams<string>();
  const [page, setPage] = useState(1);
  const [productsData, setProductsData] = useState({
    title: title,
    page: 1,
  });
  const { data: otherData = [] } = useFetchProductGetAllQuery(6);
  const { data = [] } = useFetchProductBytitleQuery(productsData);
  const items = data.result?.data || [];
  const otherItems = otherData.result?.data || [];
  const totalCount = data?.result?.count;

  useEffect(() => {
    setProductsData({
      ...productsData,
      page,
    });
  }, [page]);

  return (
    <div className={classes.searchPageWrapper}>
      <div className={`${classes.container} ${classes.searchPageContainer}`}>
        <SearchHeader quantity={totalCount} />

        {items.length > 0 ? (
          <SearchList
            searchList={items}
            totalCount={totalCount}
            setPage={setPage}
          />
        ) : (
          <OthersProducts slides={otherItems} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
