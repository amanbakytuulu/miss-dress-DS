import React from "react";

import SideBar from "../components/SideBar/SideBar";
import Widget from "../components/Widget/Widget";
import Profile from "../components/Profile/Profile";
import TableStats from "../components/TableStats/TableStats";
import List from "../components/List/List";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

import classes from "./Dashboard.module.scss";

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

function createData(
  id: number,
  name: string,
  sales: string,
  income: string,
  status: string
) {
  return { id, name, sales, income, status };
}

const rows = [
  createData(1, "Ророноа Зороt", "104 продаж", "500k+ доход", Status.ACTIVE),
  createData(2, "Портгас Д. Эйс", "104 продаж", "500k+ доход", Status.PENDING),
  createData(3, "Винсмок Санджи", "104 продаж", "500k+ доход", Status.BANNED),
  createData(4, "Нико Робин", "104 продаж", "500k+ доход", Status.DELETED),
  createData(5, "Тони Чоппер", "104 продаж", "500k+ доход", Status.ACTIVE),
];
const DashBoard = () => {
  return (
    <div className={classes.dashboard}>
      <SideBar />
      <div className={classes.dashboardContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.dashboardContent}>
          <div className={classes.left}>
            <div className={classes.widgetsContainer}>
              <h3 className={classes.widgetsTitle}>За последние 30 дней</h3>
              <div className={classes.widgets}>
                <Widget
                  widget={{
                    widgetStat: "1500",
                    widgetTitle: "проданных товаров",
                  }}
                />
                <Widget
                  widget={{
                    widgetStat: "1.5m",
                    widgetTitle: "полученный доход",
                  }}
                />
                <Widget
                  widget={{
                    widgetStat: "1500",
                    widgetTitle: "проданных товаров",
                  }}
                />
              </div>
            </div>

            <div className={classes.tableContainer}>
              {/*<TableStats*/}
              {/*  navigateToPage={ADMIN_PAGE_USERS}*/}
              {/*  type={TableTypes.USERS}*/}
              {/*  rows={rows}*/}
              {/*/>*/}
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.popularProducts}>
              <List title={"Популярные товары"} itemsList={listOfProducts} />
            </div>
            <div className={classes.popularUsers}>
              <List title={"Постоянные пользователи"} itemsList={listOfUsers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
