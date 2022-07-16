import React from "react";

import classes from "../CategoryPage.module.scss";

const Select = () => {
  return (
    <div>
      <select className={classes.selectContainer}>
        <option value="" selected disabled hidden>
          Сортировать по
        </option>
        <option value="1">По обновлению</option>
        <option value="2">По цене</option>
        <option value="3">По алфавиту</option>
        <option value="4">По умолчанию</option>
      </select>
    </div>
  );
};

export default Select;
