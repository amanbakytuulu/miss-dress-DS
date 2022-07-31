import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ADMIN_PAGE_COLLECTIONS } from "../../../../utils/path";

import { Button, InputField } from "../../../../components/common";

import banner from "../../../../assets/adminPage/banner.png";

import classes from "./CollectionItem.module.scss";

interface CollectionItemProps {
  path?: string | number;
  collection?: object;
}

const CollectionItem: FC<CollectionItemProps> = ({ path }) => {
  const navigate = useNavigate();
  const [isEdit, setEdit] = useState<boolean>(false);
  const [collectionName, setCollectionName] =
    useState<string>("Зимняя коллекция");

  const handler = (value: string) => {
    setCollectionName(value);
  };
  return (
    <div className={classes.collection}>
      <div className={classes.header}>
        {!isEdit ? (
          <div className={classes.edit}>
            <h5 className={classes.collectionName}>{collectionName}</h5>
            <button className={classes.editBtn} onClick={() => setEdit(true)}>
              Редактировать
            </button>
          </div>
        ) : (
          <div className={classes.edit}>
            <InputField
              autofocus={true}
              onKeyDown={(e) => e.key === "Enter" && setEdit(false)}
              onChange={handler}
              value={collectionName}
              type={"text"}
            />
            <Button type={"button"} onClick={() => setEdit(false)}>
              Сохранить
            </Button>
          </div>
        )}
      </div>
      <div
        className={classes.banner}
        onClick={() => navigate(ADMIN_PAGE_COLLECTIONS + "/1")}
      >
        <img src={banner} alt="" />
      </div>
      <div className={classes.editBanner}>
        <button className={classes.editBtn}>Изменить фото</button>
      </div>
    </div>
  );
};

export default CollectionItem;
