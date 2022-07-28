import React, { FC } from "react";

import { colors } from "../../../../types/colorTypes/colorTypes";

import { Button } from "../../../../components/common";

import classes from "./List.module.scss";

interface ListProps {
  title: string;
  itemsList: any;
}

const List: FC<ListProps> = ({ title, itemsList }) => {
  return (
    <div className={classes.list}>
      <h3 className={classes.title}>{title}</h3>
      <ul>
        {itemsList.map((item: any) => {
          return (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.sales}</span>
              <span>{item.income}</span>
            </li>
          );
        })}
      </ul>
      <div className={classes.buttonBox}>
        <Button
          style={{
            backgroundColor: colors.primary,
            color: colors.blackText,
            borderRadius: "18px",
          }}
        >
          Посмотреть все
        </Button>
      </div>
    </div>
  );
};

export default List;
