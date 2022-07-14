import React from "react";
import classes from "./CollactionContainer.module.scss";
import CollactionSpring from "./CollactionComponent/CollactionComponents";
import WinterImage from "../../../../assets/Main/Collaction/wintercollec.png";
import SpringImage from "../../../../assets/Main/Collaction/spring.png";
import SummerImage from "../../../../assets/Main/Collaction/summer.png";
import AutumnImage from "../../../../assets/Main/Collaction/autumn.png";

const collactions = [
  {
    title: "Зима",
    reverse: true,
    image: WinterImage,
  },
  {
    title: "Весна",
    image: SpringImage,
  },
  {
    title: "Лето",
    reverse: true,
    image: SummerImage,
  },
  {
    title: "Осень",
    image: AutumnImage,
  },
];

const ColactionContainer = () => {
  return (
    <>
      <div>
        <h1 className={classes.collection}>Коллекция</h1>
      </div>

      <div className={classes.all}>
        {collactions.map((collaction) => {
          return (
            <CollactionSpring
              reverse={collaction.reverse}
              children={collaction.title}
              sideImage={collaction.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default ColactionContainer;
