import React from "react";

import classes from "./RequisitePage.module.scss";

function RequisitePage() {
  const requisiteItems = [
    {
      title: "Наименование",
      info: "It-company Discovery Studio",
    },
    {
      title: "Почтовый адрес",
      info: "7880073, КР, г.Бишкек",
    },
    {
      title: "Фактический адрес",
      info: "​Бизнес-центр, ​Насирдина Исанова, 79 ​Первомайский район, Бишкек",
    },
    {
      title: "ИНН",
      info: "166107465410",
    },
    {
      title: "Расчетный счёт",
      info: "40802510207270000535",
    },
    {
      title: "Банк",
      info: "ОАО «Оптима Банк»",
    },
    {
      title: "Кор.счёт",
      info: "30101810845250000999",
    },
    {
      title: "ИНН банка",
      info: "7706092528",
    },
    {
      title: "БИК",
      info: "044525999",
    },
  ];

  return (
    <div className={classes.requisitePage}>
      <div className="container">
        <h3 className={classes.header}>Наши реквизиты</h3>
        <div className={classes.items}>
          {requisiteItems.map((item) => {
            return (
              <p className={classes.item}>
                <strong>{item.title}: </strong>
                <span>{item.info}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RequisitePage;
