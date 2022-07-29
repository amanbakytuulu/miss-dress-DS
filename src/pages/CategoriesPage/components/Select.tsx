import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import vector from "../../../assets/categoriesPage/Vector.svg";
import vectorfull from "../../../assets/categoriesPage/Vectorfull.svg";

import classes from "../CategoryPage.module.scss";

const Select = (props: any) => {
  const [openDd, setOpenDd] = useState(false);

  const sort = [
    {
      title: "По обновлению",
      path: "/#",
    },
    {
      title: "По цене",
      path: "/#",
    },
    {
      title: "По алфавиту",
      path: "/#",
    },
    {
      title: "По умолчанию",
      path: "/#",
    },
  ];

  return (
    <div className={classes.filterDropDown}>
      <div
        className={classes.filterDropDownBtn}
        onClick={() => setOpenDd(!openDd)}
      >
        <h2 className={classes.filterDropdownTitle}>Сортировать по</h2>
        <img src={openDd ? vectorfull : vector} />
      </div>
      <div
        className={
          openDd
            ? classes.filterDropDownContentOn
            : classes.filterDropdownContent
        }
      >
        <ul>
          {sort?.map((item: any) => {
            return (
              <li key={Math.random()} className={classes.filterListItem}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Select;
