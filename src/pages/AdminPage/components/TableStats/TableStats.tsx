import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  TableTypes,
  Status,
  TableStatsTypes,
  IAllStatus,
} from "../../../../types/adminTypes/tableTypes";

import {
  IProduct,
  IProductsStat,
} from "../../../../types/productsTypes/productsTypes";

import { IUser } from "../../../../types/usersTypes/usersTypes";

import { colors } from "../../../../types/colorTypes/colorTypes";

import { ADMIN_PAGE_USERS } from "../../../../utils/path";

import { Button } from "../../../../components/common";

import TableHeader from "./TableHeader/TableHeader";

import classes from "./TableStats.module.scss";

// function createData(
//   name: string,
//   sales: string,
//   income: string,
//   status: string
// ) {
//   return { name, sales, income, status };
// }
//
// const rows = [
//   createData("Ророноа Зороt", "104 продаж", "500k+ доход", Status.ACTIVE),
//   createData("Портгас Д. Эйс", "104 продаж", "500k+ доход", Status.PENDING),
//   createData("Винсмок Санджи", "104 продаж", "500k+ доход", Status.BANNED),
//   createData("Нико Робин", "104 продаж", "500k+ доход", Status.DELETED),
//   createData("Тони Чоппер", "104 продаж", "500k+ доход", Status.ACTIVE),
// ];

interface TableStatsProps {
  type: TableTypes;
  subTitle?: string;
  rows: any[];
  navigateToPage: string;
}

const TableStats: FC<TableStatsProps> = ({
  type,
  rows,
  subTitle,
  navigateToPage,
}) => {
  const navigate = useNavigate();
  let data;
  const navigateTo = (id: number) => {
    return () => navigate(navigateToPage + `/${id}`);
  };

  const allStatus: IAllStatus = {
    [Status.ACTIVE]: "Active",
    [Status.PENDING]: "Pending",
    [Status.DELETED]: "Deleted",
    [Status.BANNED]: "Banned",
  };

  switch (type) {
    case TableTypes.USERS:
      data = {
        title: "Все пользователи",
        tableCellHeader: [
          { name: "Пользователь" },
          { name: "Номер телефона" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
      };
      break;
    case TableTypes.ALL_PRODUCTS:
      data = {
        title: "Все товары",
        subTitle: subTitle || null,
        tableCellHeader: [
          { name: "Наименование товара" },
          { name: "Артикул" },
          { name: "Номер товара" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
      };
      break;

    default:
      data = {
        title: "Все пользователи",
        tableCellHeader: [
          { name: "Пользователь" },
          { name: "Продажи" },
          { name: "Доход" },
        ],
      };
      break;
  }

  console.log(rows);

  return (
    <>
      <TableHeader title={data.title} subTitle={data?.subTitle} />
      <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {data.tableCellHeader.map((tableCell) => {
                return (
                  <TableCell className={classes.tableCellHeader}>
                    {tableCell.name}
                  </TableCell>
                );
              })}
              <TableCell className={classes.tableCellHeader} align="center">
                Статус
              </TableCell>
            </TableRow>
          </TableHead>
          {rows[0]?.product ? (
            <TableBody>
              {rows.map((row: IProductsStat) => (
                <TableRow
                  key={row.id}
                  className={classes.tableRow}
                  onClick={navigateTo(row.productId)}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableCellName}`}
                  >
                    {row.product.title}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.product.article}
                  </TableCell>
                  {row.productId && (
                    <TableCell className={classes.tableCell}>
                      {row.productId}
                    </TableCell>
                  )}

                  <TableCell className={classes.tableCell}>
                    {row.allTotalCount} продаж
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.allAmount} доход
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <span
                      className={`${classes.status} ${
                        classes[allStatus[`${row.status}`]]
                      }`}
                    >
                      {allStatus[`${row.status}`]}
                    </span>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: "5px",
                        backgroundColor: colors.deleteBtn,
                        color: colors.blackText,
                      }}
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              {rows.map((row: IUser) => (
                <TableRow
                  key={row.user_first_name}
                  className={classes.tableRow}
                  // onClick={navigateTo(row.user_first_name)}
                >
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableCellName}`}
                  >
                    {`${row.user_first_name} ${row.user_last_name}`}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.user_phone_number}
                  </TableCell>

                  <TableCell className={classes.tableCell}>
                    {row.price || 0} продаж
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.amount || 0} доход
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <span
                      className={`${classes.status} ${
                        classes[allStatus[`${row.user_status}`]]
                      }`}
                    >
                      {allStatus[`${row.user_status}`]}
                    </span>
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell}>
                    <Button
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: "5px",
                        backgroundColor: colors.deleteBtn,
                        color: colors.blackText,
                      }}
                    >
                      Удалить
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
};

export default TableStats;
