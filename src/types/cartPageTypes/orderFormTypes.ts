export interface IOrderFormValues {
  name: string;
  phoneNumber: string;
  city: string;
  surname: string;
  country: string;
}

interface Products {
  id: number;
  status: number;
  createDate: string;
  updateDate: string;
  totalCount: number;
  amount: number;
  product: {
    id: number;
    createDate: string;
    updateDate: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    article: string;
    rate: number;
    discount: null
  }
}

export interface ICart {
  id: number;
  status: number;
  createDate: string;
  updateDate: string;
  amount: number,
  price: number;
  proceedStatus: number;
  products: Products[];
}