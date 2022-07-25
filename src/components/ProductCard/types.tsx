interface IColors {
  img: string;
  count: string;
}
interface IItemCard {
  img: string;
  oldPrice: string;
  newPrice: string;
  title: string;
  colors: IColors;
  size: string;
  stars: Array<string>;
  heart: string;
}
export interface IProductCard {
  item: IItemCard;
  btnTitle: string;
}

