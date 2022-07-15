import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IFooterItems } from "../../../types/FooterTypes/FooterTypes";
import { ABOUT_PAGE, CONTACTS_PAGE } from "../../../utils/path";
import classes from "../style.module.scss";
const FooterList = () => {
  const liElements1: IFooterItems[] = [
    {
      title: "Покупателям",
      path: "/buy",
    },
    {
      title: "Как сделать заказ",
      path: "/buy",
    },
    {
      title: "Способы оплаты",
      path: "/buy",
    },
    {
      title: "Доставка",
      path: "/buy",
    },
  ];

  const liElements2: IFooterItems[] = [
    {
      title: "Покупателям",
      path: "/buy",
    },
    {
      title: "Возврат товара",
      path: "/buy",
    },
    {
      title: "Вопросы и ответы",
      path: "/buy",
    },
    {
      title: "Публичная оферта",
      path: "/buy",
    },
  ];

  const liElements3: IFooterItems[] = [
    {
      title: "Компания",
      path: "/buy",
    },
    {
      title: "О нас",
      path: ABOUT_PAGE,
    },
    {
      title: "Реквизиты",
      path: "/buy",
    },
    {
      title: "Контакты",
      path: CONTACTS_PAGE,
    },
  ];

  const liElements4: IFooterItems[] = [
    {
      title: "Контакты",
      path: CONTACTS_PAGE,
    },
    {
      title: "Номер телефона",
      path: "tel:+996712345678",
    },
    {
      title: "Email",
      path: `https://mailto:missdress@gmail.com`,
    },
    {
      title: "Адрес",
      path: "https://2gis.kg/bishkek/firm/70000001036409659?m=74.592154%2C42.874231%2F16",
    },
  ];
  return (
    <>
      <div>
        {liElements1.map((item, index) => (
          <ul key={index}>
            <Link className={classes.listElem} to={item.path}>
              {item.title}
            </Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements2.map((item, index) => (
          <ul key={index}>
            <Link className={classes.listElem} to={item.path}>
              {item.title}
            </Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements3.map((item, index) => (
          <ul key={index}>
            <Link className={classes.listElem} to={item.path}>
              {item.title}
            </Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements4.map((item, index) => (
          <ul key={index}>
            <a className={classes.listElem} href={item.path}>
              {item.title}
            </a>
          </ul>
        ))}
      </div>
    </>
  );
};

export default FooterList;
