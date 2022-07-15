import React, { FC } from "react";

import classes from "./CollactionComponents.module.scss";

interface CollactionSpringProps {
  children: React.ReactNode;
  sideImage: string;
  reverse?: boolean;
}

const CollactionSpring: FC<CollactionSpringProps> = ({
  children,
  sideImage,
  reverse,
}) => {
  return (
    <div className={classes.spring}>
      <div className={classes.spring__flex__item}>
        <img className={classes.spring__image} src={sideImage} alt="" />
        <h3 className={`${classes.spring__h1} ${reverse && classes.reverse}`}>
          {children}
        </h3>
      </div>
    </div>
  );
};

export default CollactionSpring;
