import photo2 from "../../../assets/mainSwiper/photo2.png";
import photo7 from "../../../assets/mainSwiper/photo7.png";

export const swiperArr = [
  { id: 0, photo: photo2 },
  { id: 1, photo: photo7 },
  { id: 2, photo: photo2 },
  { id: 3, photo: photo7 },
  { id: 4, photo: photo2 },
];

export interface ISwiperArr {
  id: number;
  photo: string;
}