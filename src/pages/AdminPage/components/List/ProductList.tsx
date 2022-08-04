import React, { FC } from "react";

import { IPopularProduct } from "../../../../types/productsTypes/productsTypes";

interface ProductListProps {
  productList: IPopularProduct[];
}

const ProductList: FC<ProductListProps> = ({ productList }) => {
  return (
    <ul>
      {productList.map((item: IPopularProduct, index) => {
        return (
          <li key={item.product_title + index}>
            <strong>{item.product_title}</strong>
            <span>{item.amount}</span>
            <span>{item.totalCount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
