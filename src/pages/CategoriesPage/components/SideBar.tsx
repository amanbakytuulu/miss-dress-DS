import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "../CategoryPage.module.scss";

import vector from "../../../assets/categoriesPage/Vector.svg";
import vectorfull from "../../../assets/categoriesPage/Vectorfull.svg";

import { categoryApi } from "../../../store/features/Category/category/categoryQuery";

const SideBar = () => {
  const [showChild, setShowChild] = useState(false);
  const [show, setShow] = useState(false);

  const { data } = categoryApi.useFetchCategoryQuery("");
  const categories = data?.result;

  return (
    <div onClick={() => setShow(!show)} className={classes.sideBarDiv}>
      <div className={classes.vectorSortCategory}>
        <h1>Категория</h1>
      </div>
      <ul className={classes.ulItems}>
        {categories?.map((item: any) => {
          return (
            <li key={item.id} className={classes.categoriesListItem}>
              <NavLink to={item.id}>{item.title}</NavLink>
              {item.children?.length > 0 && (
                <img
                  className={classes.vector}
                  src={showChild ? vectorfull : vector}
                  onClick={() => setShowChild(!showChild)}
                  alt=""
                />
              )}
              <ul>
                {item.children?.length > 0 &&
                  showChild &&
                  item.children.map((el: any) => {
                    return (
                      <li key={el.id} className={classes.childrenListItem}>
                        <NavLink to={el.id}>{el.title}</NavLink>
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
