import React, { FC } from "react";

import EditBtn from "../../components/EditBtn/EditBtn";

import classes from "./Photos.module.scss";

interface PhotosProps {
  images: any[];
}
const Photos: FC<PhotosProps> = ({ images }) => {
  return (
    <div className={classes.photos}>
      <div className={classes.images}>
        {images.map((image) => {
          return (
            <div className={classes.image} key={image.id}>
              <img src={image.url} alt="" />
            </div>
          );
        })}
        <div className={classes.editPhotos}>
          <EditBtn>Изменить фото</EditBtn>
        </div>
      </div>
    </div>
  );
};

export default Photos;
