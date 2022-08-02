import React, { FC, useState } from "react";

import classes from "./SubscrubeList.module.scss";

interface SubscrubeListProps {
  inputConfig?: object;
  type: string;
  onChange?: (value: string) => void;
}

const SubscrubeList: FC<SubscrubeListProps> = ({ type, onChange }) => {
  const [state, setState] = useState<boolean>(true);
  const [value, setValue] = useState<string>("Выбрать категорию");

  const changecategory = () => {
    setState(!state);
  };
  const changeValue = (name: string) => {
    if (onChange) {
      onChange(name);
    }
    setValue(name);
    setState(!state);
  };
  const subscribe = ["Платья", "Юбки", "Джинсы", "Брюки"];
  return state ? (
    <div onClick={changecategory} className={classes.image__input}>
      {value}
    </div>
  ) : (
    <div className={classes.image__in}>
      {subscribe.map((item) => {
        return (
          <div className={classes.image} onClick={() => changeValue(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default SubscrubeList;
