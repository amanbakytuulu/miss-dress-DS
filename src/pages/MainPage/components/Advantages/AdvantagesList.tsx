import { IAdvantagesItems } from "../../../../types/AdvantagesTypes/AdvantagesTypes";

import styles from "./Advantages.module.scss";

const AdvantageList = () => {
  const liElements: IAdvantagesItems[] = [
    {
      title: "Гарантия обмена и возврата товара",
      text: "100% гарантия возврата товара",
    },
    {
      title: "Профессиональная консультация",
      text: "Постоянная обратная связь с клиентами",
    },
    {
      title: "Акции для покупателей",
      text: "Промокод для клиентов, акции на новые товары",
    },
    {
      title: "Возможность оплаты при получении",
      text: "Возможность оплаты наложенным платежем",
    },
  ];

  return (
    <div className={styles.list}>
      {liElements.map((item) => (
        <div className={styles.block}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AdvantageList;
