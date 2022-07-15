import React, { FC } from "react";

import classes from "../SubscrubeComponents/SubscrubeComponents.module.scss";

interface SubscrubeProps {
  placeholder: string;
}

const SubscrubeComponents: FC<SubscrubeProps> = ({ placeholder }) => {
  return (
    <div className={classes.image}>
      <input
        placeholder={placeholder}
        className={classes.image__input}
        type="text"
      />
    </div>
  );
};

export default SubscrubeComponents;
