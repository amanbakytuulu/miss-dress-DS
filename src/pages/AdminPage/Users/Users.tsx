import React from "react";

import SideBar from "../components/SideBar/SideBar";
import Profile from "../components/Profile/Profile";
import Widget from "../components/Widget/Widget";
import TableStats from "../components/TableStats/TableStats";
import List from "../components/List/List";

import { ADMIN_PAGE_USERS } from "../../../utils/path";

import { Status, TableTypes } from "../../../types/adminTypes/tableTypes";

import { useFetchUsersStatsQuery } from "../../../store/features/Admin/usersStatisticsQuery";
import { useFetchAllStatQuery } from "../../../store/features/Admin/allStatQuery";

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

const Users = () => {
  const { data, isSuccess: isUsersSuccess } = useFetchUsersStatsQuery("");
  const users = isUsersSuccess && data.result;
  const { data: stats = {}, isSuccess: isStatsSuccess } =
    useFetchAllStatQuery("");
  return (
    <div className={classes.users}>
      <SideBar />
      <div className={classes.usersContainer}>
        <div className={classes.header}>
          <div className={classes.headerLeft}>
            <div className={classes.widgets}>
              <Widget
                widget={{
                  widgetStat: stats?.result?.lastDateNewUsers || 0,
                  widgetTitle: "новых пользователей",
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
