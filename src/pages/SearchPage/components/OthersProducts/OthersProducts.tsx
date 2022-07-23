import React, { FC } from "react";

import SearchSlider from "../SearchSlider/SearchSlider";

import classes from "./OthersProducts.module.scss";

interface SearchOthersProps {
  slides: any;
}

const OthersProducts: FC<SearchOthersProps> = ({ slides }) => {
  return (
    <div className={classes.searchOthersWrapper}>
      <h3>Похожие товары</h3>
      <SearchSlider slides={slides} />
    </div>
  );
};

export default OthersProducts;
