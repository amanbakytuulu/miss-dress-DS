import React from "react";

import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";
import Widget from "../components/Widget/Widget";
import TableStats from "../components/TableStats/TableStats";
import List from "../components/List/List";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

import { useFetchUsersStatsQuery } from "../../../store/features/Admin/usersStatisticsQuery";

import classes from "./Users.module.scss";

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
// function createData(
//   id: number,
//   name: string,
//   sales: string,
//   income: string,
//   status: string
// ) {
//   return { id, name, sales, income, status };
// }
//
// const rows = [
//   createData(1, "Ророноа Зороt", "104 продаж", "500k+ доход", Status.ACTIVE),
//   createData(2, "Портгас Д. Эйс", "104 продаж", "500k+ доход", Status.PENDING),
//   createData(3, "Винсмок Санджи", "104 продаж", "500k+ доход", Status.BANNED),
//   createData(4, "Нико Робин", "104 продаж", "500k+ доход", Status.DELETED),
//   createData(5, "Тони Чоппер", "104 продаж", "500k+ доход", Status.ACTIVE),
// ];

const Users = () => {
  const { data, isSuccess } = useFetchUsersStatsQuery("");
  const users = isSuccess && data.result;
  console.log(users);
  return (
    <div className={classes.users}>
      <SideBar />
      <div className={classes.usersContainer}>
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
              <List title={"Постоянные пользователи"} itemsList={listOfUsers} />
            </div>
          </div>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>
        <div className={classes.usersContent}>
          <div className={classes.left}>
            <div className={classes.tableContainer}>
              <TableStats
                navigateToPage={ADMIN_PAGE_USERS}
                type={TableTypes.USERS}
                rows={users || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
