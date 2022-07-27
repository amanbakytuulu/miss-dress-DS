import React, { FC } from "react";

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
    </div>
  );
};

export default List;
