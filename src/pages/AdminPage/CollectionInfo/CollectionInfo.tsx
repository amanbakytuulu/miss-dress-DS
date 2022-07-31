import React from "react";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";

import classes from "./CollectionInfo.module.scss";

const listOfProducts = [
  {
    name: "Benito Kate Wrap Dress",
    sales: "254 продаж",
    income: "1.2m+ доход",
  },
  {
    name: "JUSTONE Shy Embo Can Skirt",
    sales: "254 продаж",
    income: "1.2m+ доход",
  },
  {
    name: "Envy Look Button Eco Dress",
    sales: "159 продаж",
    income: "790k+ доход",
  },
];

const CollectionInfo = () => {
  return (
    <div className={classes.collectionInfo}>
      <SideBar />
      <div className={classes.collectionInfoContainer}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: "1500",
                  widgetTitle: "проданных товаров",
                }}
              />
            </div>
            <div className={classes.popularUsers}>
              <List title={"Популярные товары"} itemsList={listOfProducts} />
            </div>
          </div>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.collectionInfoContent}>
          <div className={classes.left}>
            <div className={classes.tableContainer}>
              <TableStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
