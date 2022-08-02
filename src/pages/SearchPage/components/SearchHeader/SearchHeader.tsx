import React, { FC } from "react";

import classes from "./SearchHeader.module.scss";
import Select from "./../../../CategoriesPage/components/Select";

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
      {quantity > 0 ? <Select /> : null}
    </div>
  );
};

export default SearchHeader;
