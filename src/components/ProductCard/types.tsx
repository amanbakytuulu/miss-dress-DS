interface IColors {
  img: string;
  count: string;
}
export interface IItemCard {
  // img: string;
  // oldPrice: string;
  // newPrice: string;
  // title: string;
  // colors: IColors;
  // size: string;
  // stars: Array<string>;
  // heart: string;

  id: number;
  status: number;
  createDate: string;
  updateDate: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount: number | null;
}
export interface IProductCard {
  item: IItemCard;
  btnTitle: string;
}
