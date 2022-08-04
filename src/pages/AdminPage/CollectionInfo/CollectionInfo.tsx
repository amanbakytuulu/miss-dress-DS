import React from "react";
import { useLocation, useParams } from "react-router-dom";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import List from "../components/List/List";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";

import { useFetchProductsStatQuery } from "../../../store/features/Admin/productStatisticsQuery";

import { ADMIN_PAGE_PRODUCTS } from "../../../utils/path";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

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
// function createData(
//   id: number,
//   name: string,
//   sales: string,
//   income: string,
//   productId: string,
//   status: number
// ) {
//   return { id, name, sales, income, status, productId };
// }
//
// const rows = [
//   createData(
//     1,
//     "Benito Kate Wrap Dress",
//     "104 продаж",
//     "500k+ доход",
//     "1234",
//     Status.ACTIVE
//   ),
//   createData(
//     2,
//     "JUSTONE Shy Embo Can Skirt",
//     "104 продаж",
//     "500k+ доход",
//     "1234",
//     Status.PENDING
//   ),
//   createData(
//     3,
//     "Envy Look Button Eco Dress",
//     "104 продаж",
//     "500k+ доход",
//     "1234",
//     Status.BANNED
//   ),
//   createData(
//     4,
//     "Envy Look All Season Skirt",
//     "104 продаж",
//     "500k+ доход",
//     "1234",
//     Status.DELETED
//   ),
//   createData(
//     5,
//     "Choper Shoulder Frill Vent Dress ",
//     "104 продаж",
//     "500k+ доход",
//     "1234",
//     Status.ACTIVE
//   ),
// ];

const CollectionInfo = () => {
  const { id } = useParams();
  const { data: products = [], isSuccess } = useFetchProductsStatQuery(id);

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
              <TableStats
                navigateToPage={ADMIN_PAGE_PRODUCTS}
                type={TableTypes.ALL_PRODUCTS}
                rows={isSuccess ? products?.result : []}
                subTitle={"Весенняя коллекция"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionInfo;
