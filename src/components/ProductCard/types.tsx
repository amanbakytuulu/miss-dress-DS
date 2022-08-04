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
  images: string[];
  discount: number | null;
}

type Category = {
  createDate: string;
  id: number;
  status: number;
  title: string;
  updateDate: string;
};
export interface IProductCardCollection extends IItemCard {
  category?: Category;
}

export interface IProductCard {
  item: IProductCardCollection;
  btnTitle: string;
}
