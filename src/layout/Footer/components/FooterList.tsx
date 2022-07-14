import React from "react";
import { Link } from "react-router-dom";

import { IFooterItems } from "../../../types/FooterTypes/FooterTypes";
import classes from '../style.module.css'

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
      path: "/buy",
    },
    {
      title: "Реквизиты",
      path: "/buy",
    },
    {
      title: "Контакты",
      path: "/buy",
    },
  ];

  const liElements4: IFooterItems[] = [
    {
      title: "Контакты",
      path: "/buy",
    },
    {
      title: "Номер телефона",
      path: "/buy",
    },
    {
      title: "Email",
      path: "/buy",
    },
    {
      title: "Адрес",
      path: "/buy",
    },
  ];
  return (
    <>
      <div >
        {liElements1.map((item) => (
          <ul>
            <Link className={classes.listElem} to={item.path}>{item.title}</Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements2.map((item) => (
          <ul>
            <Link className={classes.listElem} to={item.path}>{item.title}</Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements3.map((item) => (
          <ul>
            <Link className={classes.listElem} to={item.path}>{item.title}</Link>
          </ul>
        ))}
      </div>
      <div>
        {liElements4.map((item) => (
          <ul>
            <Link className={classes.listElem} to={item.path}>{item.title}</Link>
          </ul>
        ))}
      </div>
    </>
  );
};

export default FooterList;
