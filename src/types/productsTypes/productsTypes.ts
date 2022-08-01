export interface IProductType {
  id: number;
  status: number;
  createDate: Date | string;
  updateDate: Date | string;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount?: any;
  images: any[];
}
