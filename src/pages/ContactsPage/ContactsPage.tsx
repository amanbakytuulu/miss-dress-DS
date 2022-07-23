import React from "react";

import { ReactComponent as WhatsAppIcon } from "../../assets/icons/contactIcons/whatsappIcon.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/contactIcons/telegramIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/contactIcons/instagramIcon.svg";

import { ISocialTypes } from "../../types/SocialTypes/SocialTypes";

import SocialList from "./SocialList/SocialList";

import classes from "./ContactsPage.module.scss";

const socials: ISocialTypes[] = [
  {
    icon: <WhatsAppIcon />,
    contacts: "+996712345678",
  },
  {
    icon: <TelegramIcon />,
    contacts: "+996712345678",
  },
  {
    icon: <InstagramIcon />,
    contacts: "@missdress",
  },
];

const ContactsPage = () => {
  return (
    <div className={classes.contactsWrapper}>
      <h2 className={classes.contactsTitle}>Контакты</h2>

      <div className={classes.phoneNumber}>
        <span>Тел: +996712345678, +996787654321</span>
      </div>

      <SocialList socials={socials} />

      <div className={classes.email}>
        <span>Email: missdress@gmail.com</span>
      </div>

      <div className={classes.workingHours}>
        <span>
          Рабочие дни: Пн. - Пт: с 10:00 до 20:00 <br /> Выходные дни: Сб-Вс
        </span>
      </div>
    </div>
  );
};

export default ContactsPage;
