import React, { useEffect, useRef } from "react";
import { Chart } from "react-google-charts";

import SideBar from "../components/SideBar/SideBar";
import BackButton from "../components/BackButton/BackButton";
import Profile from "../components/Profile/Profile";

import { ADMIN_PAGE_USERS } from "../../../utils/path";
import Widget from "../components/Widget/Widget";

import List from "../components/List/List";

import { separateList } from "../../../utils/separateList";

import { useFetchAllStatQuery } from "../../../store/features/Admin/allStatQuery";
import { useFetchPopularProductsQuery } from "../../../store/features/Admin/productStatisticsQuery";

import classes from "./Sales.module.scss";

interface IMonth {
  [key: number]: string;
}

const getMonth = (month: number) => {
  const months: IMonth = {
    1: "янв",
    2: "фев",
    3: "мар",
    4: "апр",
    5: "май",
    6: "июн",
    7: "июл",
    8: "авг",
    9: "сен",
    10: "окт",
    11: "ноя",
    12: "дек",
  };

  return months[month || 0];
};

const graphData = [
  {
    collection: "winter",
    sales: [
      {
        count: 2,
        month: "1",
      },
      {
        count: 90,
        month: "2",
      },
      {
        count: 20,
        month: "3",
      },
      {
        count: 38,
        month: "4",
      },
      {
        count: 100,
        month: "5",
      },
      {
        count: 8,
        month: "6",
      },
      {
        count: 66,
        month: "7",
      },
    ],
  },
  {
    collection: "summer",
    sales: [
      {
        count: 78,
        month: "1",
      },
      {
        count: 8,
        month: "2",
      },
      {
        count: 18,
        month: "3",
      },
      {
        count: 10,
        month: "4",
      },
      {
        count: 28,
        month: "5",
      },
      {
        count: 38,
        month: "6",
      },
      {
        count: 48,
        month: "7",
      },
      {
        count: 7,
        month: "8",
      },
      {
        count: 97,
        month: "9",
      },
      {
        count: 8,
        month: "10",
      },
    ],
  },
  {
    collection: "autumn",
    sales: [
      {
        count: 2,
        month: "1",
      },
      {
        count: 90,
        month: "2",
      },
      {
        count: 78,
        month: "3",
      },
      {
        count: 18,
        month: "4",
      },
      {
        count: 88,
        month: "5",
      },
      {
        count: 12,
        month: "6",
      },
      {
        count: 23,
        month: "7",
      },
      {
        count: 88,
        month: "8",
      },
      {
        count: 48,
        month: "9",
      },
      {
        count: 100,
        month: "10",
      },
    ],
  },
  {
    collection: "spring",
    sales: [
      {
        count: 10,
        month: "1",
      },
      {
        count: 60,
        month: "2",
      },
      {
        count: 80,
        month: "3",
      },
      {
        count: 4,
        month: "4",
      },
      {
        count: 49,
        month: "5",
      },
      {
        count: 7,
        month: "6",
      },
      {
        count: 90,
        month: "7",
      },
      {
        count: 78,
        month: "8",
      },
      {
        count: 8,
        month: "9",
      },
      {
        count: 100,
        month: "10",
      },
    ],
  },
];

export const data = [
  [
    "",
    "Зимняя коллекция",
    "Весенняя коллекция",
    "Летняя коллекция",
    "Осенняя коллекция",
  ],
  [getMonth(1), 1000, 400, 200, 100],
  [getMonth(2), 1170, 460, 100, 20],
  [getMonth(3), 660, 1120, 20, 400],
  [getMonth(4), 1030, 540, 1100, 900],
];

const getData = (arr: any[]) => {
  const newArr: any[] = [
    [getMonth(1)],
    [getMonth(2)],
    [getMonth(3)],
    [getMonth(4)],
    [getMonth(5)],
    [getMonth(6)],
    [getMonth(7)],
    [getMonth(8)],
    [getMonth(9)],
    [getMonth(10)],
    [getMonth(11)],
    [getMonth(12)],
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i].sales[j]) {
        if (newArr[j][0] == getMonth(arr[i].sales[j].month)) {
          newArr[j].push(arr[i].sales[j].count);
        }
      } else {
        newArr[j].push(0);
      }
    }
  }
  console.log(newArr);
  // }  for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].sales.length; j++) {
  //     // newArr.push(arr[i].sales[j]);
  //     if (newArr[j][0] == getMonth(arr[i].sales[j].month)) {
  //       // if (arr[i].sales.length < 12) {
  //       //   newArr[j].push(0);
  //       // }
  //
  //       if (!arr[i].sales[j].hasOwnProperty("count")) {
  //         newArr[j].push(0);
  //       } else {
  //         newArr[j].push(arr[i].sales[j].count);
  //       }
  //     }
  //   }
  // }

  // for (let i = 0; i < 12; i++) {
  //   const data: any[] = [];
  //   arr.forEach((item, index) => {
  //     const month: string = getMonth(+item.sales[index].month);
  //     console.log(month);
  //     if (index === 0) {
  //       data.push(month);
  //       return;
  //     }
  //     data.push(item.count);
  //   });
  //   newArr.push(data);
  // }
  return [
    [
      "",
      "Зимняя коллекция",
      "Весенняя коллекция",
      "Летняя коллекция",
      "Осенняя коллекция",
    ],
    ...newArr,
  ];
};

const options = {
  hAxis: {
    title: "Year",
    titleTextStyle: { color: "#333" },
  },
  vAxis: { minValue: 0 },
  chartArea: {},
  // colors: ["#FB7A21", "#74614d"],
  BackgroundColor: "#E4E4E4",
};
const Sales = () => {
  const { data: statData = {}, isSuccess: isStatsDataSuccess } =
    useFetchAllStatQuery("");
  const { data: popularProducts = {}, isSuccess: isPopularProductsSuccess } =
    useFetchPopularProductsQuery("");
  const { data: popularUsers, isSuccess: isPopularUsersSuccess } =
    useFetchPopularProductsQuery("");
  const popularProductList = separateList(
    isPopularProductsSuccess && popularProducts.result
  );
  const popularUserList = separateList(
    isPopularUsersSuccess && popularUsers.result
  );
  const stats = isStatsDataSuccess && statData.result;

  return (
    <div className={classes.sales}>
      <SideBar />
      <div className={classes.salesContainer}>
        <div className={classes.header}>
          <div className={classes.headerProfile}>
            <Profile />
          </div>
        </div>

        <div className={classes.salesContent}>
          <div className={classes.left}>
            <div className={classes.totalInfo}>
              <h4> Информация о доходах</h4>
              <ul>
                <li>
                  <strong>Доход за неделю</strong>
                  <span>354k+</span>
                </li>
                <li>
                  <strong>Доход за месяц</strong>
                  <span>1.5m+</span>
                </li>
                <li>
                  <strong>Общая сумма дохода за год</strong>
                  <span>257m+</span>
                </li>
              </ul>
            </div>

            <div className={classes.chart}>
              <h3>Статистика продаж</h3>
              <Chart
                className={classes.svg}
                chartType="Line"
                width="100%"
                height="400px"
                data={getData(graphData)}
                options={options}
              />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.widget}>
              <Widget
                widget={{
                  widgetStat: stats.lastDateNewOrderPrices || 0,
                  widgetTitle: "полученный доход",
                }}
              />
            </div>

            <div className={classes.list}>
              <List
                title={"Товары с большим числом продаж"}
                itemsList={popularProductList || []}
              />
              <List
                title={"Пользователи с большим числом продаж"}
                itemsList={popularUserList || []}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
