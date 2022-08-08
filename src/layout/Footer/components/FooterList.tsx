import React from "react";
import { Link } from "react-router-dom";

import { IFooterItems } from "../../../types/FooterTypes/FooterTypes";
import { ABOUT_PAGE, CONTACTS_PAGE } from "../../../utils/path";

import classes from "../style.module.scss";

const FooterList = () => {
  const liElements1: IFooterItems[] = [
    {
      title: "Покупателям",
    },
    {
      title: "Как сделать заказ",
      path: "/make_order",
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
    },
    {
      title: "Возврат товара",
      path: "/backProduct",
    },
    {
      title: "Вопросы и ответы",
      path: "/questions",
    },
    {
      title: "Публичная оферта",
      path: "/offert",
    },
  ];

  const liElements3: IFooterItems[] = [
    {
      title: "Компания",
    },
    {
      title: "О нас",
      path: ABOUT_PAGE,
    },
    {
      title: "Реквизиты",
      path: "/requisite",
    },
    {
      title: "Контакты",
      path: CONTACTS_PAGE,
    },
  ];

  const liElements4: IFooterItems[] = [
    {
      title: "Контакты",
    },
    {
      title: "( +996 ) 707892010",
      path: "tel:+996707892010",
    },
    {
      title: "missdress@gmail.com",
      path: `https://mailto:missdress@gmail.com`,
    },
    {
      title: "Насирдина Исанова, 79",
      path: "https://2gis.kg/bishkek/firm/70000001036409659?floor=1&m=74.592154%2C42.874231%2F17.7",
    },
  ];
  return (
    <>
      <div>
        {liElements1.map((item, index) => (
          <ul key={index}>
            {item.path ? (
              <Link
                className={classes.listElem}
                title={item.title}
                to={item.path}
              >
                {item.title}
              </Link>
            ) : (
              <h3 className={classes.listHeader}>{item.title}</h3>
            )}
          </ul>
        ))}
      </div>
      <div>
        {liElements2.map((item, index) => (
          <ul key={index}>
            {item.path ? (
              <Link
                className={classes.listElem}
                title={item.title}
                to={item.path}
              >
                {item.title}
              </Link>
            ) : (
              <h3 className={classes.listHeader}>{item.title}</h3>
            )}
          </ul>
        ))}
      </div>
      <div>
        {liElements3.map((item, index) => (
          <ul key={index}>
            {item.path ? (
              <Link
                className={classes.listElem}
                title={item.title}
                to={item.path}
              >
                {item.title}
              </Link>
            ) : (
              <h3 className={classes.listHeader}>{item.title}</h3>
            )}
          </ul>
        ))}
      </div>
      <div>
        {liElements4.map((item, index) => (
          <ul key={index}>
            {item.path ? (
              <a
                className={classes.listElem}
                title={item.title}
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            ) : (
              <h3 className={classes.listHeader}>{item.title}</h3>
            )}
          </ul>
        ))}
      </div>
    </>
  );
};

export default FooterList;
