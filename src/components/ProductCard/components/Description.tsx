import React from "react";

import classes from "../style.module.scss";

const Description = ({ item }: any) => {
  return (
    <>
      <div className={classes.priceDiv}>
        <div className={classes.priceP}>
          <p>{item.oldPrice}</p>
          <p>{item.newPrice}</p>
        </div>
        <div className={classes.colorDiv}>
          <img width={33} src={item.colors.img} alt="" />
          <p>{item.colors.count}</p>
        </div>
      </div>
      <p className={classes.titleP}>{item.title}</p>
      <p className={classes.sizeP}>{item.size}</p>
    </>
  );
};

export default Description;
