import React, { FC } from "react";

import classes from "./SearchHeader.module.scss";

interface SearchHeaderProps {
  quantity: number;
}

const SearchHeader: FC<SearchHeaderProps> = ({ quantity }) => {
  return (
    <div className={classes.searchPageHeader}>
      <div className={classes.searchPageHeaderLeft}>
        <h3 className={classes.searchPageTitle}>Результаты поиска</h3>
        <span className={classes.searchPageHeaderQuantity}>
          Найдено {quantity} моделей
        </span>
      </div>
      <select>
        <option value="123">123</option>
      </select>
    </div>
  );
};

export default SearchHeader;
