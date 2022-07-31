import React from "react";

import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import SideBar from "../components/SideBar/SideBar";
import Collection from "../components/CollectionItem/CollectionItem";
import TableStats from "../components/TableStats/TableStats";

import classes from "./Products.module.scss";

const listOfUsers = [
  {
    name: "Ророноа Зоро",
    sales: "104 продаж",
    income: "500k+ доход",
  },
  {
    name: "Портгас Д. Эйс",
    sales: "85 продаж",
    income: "400k+ доход",
  },
  {
    name: "Винсмок Санджи",
    sales: "25 продаж",
    income: "125k+ доход",
  },
];

const Products = () => {
  return (
    <div className={classes.products}>
      <SideBar />

      <div className={classes.productsContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.productsContent}>
          <div className={classes.productsContentStats}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: "1500",
                  widgetTitle: "проданных товаров",
                }}
              />
            </div>
            <div className={classes.popularUsers}>
              <List title={"Постоянные пользователи"} itemsList={listOfUsers} />
            </div>
          </div>

          <div className={classes.collections}>
            <Collection path={1} />
            <Collection path={2} />
            <Collection path={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
