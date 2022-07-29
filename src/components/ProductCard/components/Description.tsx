import React from "react";

import classes from "../style.module.scss";
import amount from "../../../assets/ProductPage/Amount.svg";

const Description = ({ item }: any) => {
  return (
    <>
      <div className={classes.priceDiv}>
        <div className={classes.priceP}>
          <p>{item.oldPrice}1000</p>
          <p>{item.price}</p>
        </div>
        <div className={classes.colorDiv}>
          <img width={33} src={amount} alt="" />
          <p>{item.amount}</p>
        </div>
      </div>
      <p className={classes.titleP}>{item.title}</p>
      {/* <p className={classes.sizeP}>{item.size}</p> */}
    </>
  );
};

export default Description;
