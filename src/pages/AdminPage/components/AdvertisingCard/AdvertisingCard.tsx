import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADMIN_PAGE_COLLECTIONS } from "../../../../utils/path";

import EditBtn from "../EditBtn/EditBtn";
import { Button, InputField } from "../../../../components/common";

import banner from "../../../../assets/adminPage/banner.png";

import classes from "./AdvertisingCard.module.scss";

// interface AdvertisingCardProps {}

const AdvertisingCard: FC = () => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [advertisingName, setAdvertisingName] = useState<string>(
    "Реклама тренажерного зала"
  );
  return (
    <div className={classes.advertisingCard}>
      <div className={classes.header}>
        <h5 className={classes.advertisingCardName}>{advertisingName}</h5>
        <div className={classes.startAdBtn}>
          <EditBtn>Запустить</EditBtn>
        </div>
      </div>
      <div className={classes.banner}>
        <img src={banner} alt="" />
      </div>
      <div className={classes.editBanner}>
        <EditBtn>Редактировать</EditBtn>
      </div>
    </div>
  );
};

export default AdvertisingCard;
