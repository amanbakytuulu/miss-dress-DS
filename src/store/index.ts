import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { productCategoryApi } from "./features/Product/productCategory/productCategoryQuery";

import { productIdApi } from "./features/Product/productId/productIdQuery";

import { categoryApi } from "./features/Category/category/categoryQuery";
import { categoryMainApi } from "./features/Category/categoryMain/categoryMainQuery";
import { notificationApi } from "./features/Notification/notificationQuery";
import { productFavoritesApi } from "./features/Product/productFavorites/productFavoritesQuery";
import { productGetAllApi } from "./features/Product/productGetAll/ProductGetAllQuery";
import { getAllApi } from "./features/User/getAll/getAllQuery";
import { meApi } from "./features/User/userMe/meQuery";
import { collectionApi } from "./features/Collection/collectionQuery";

const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  [categoryMainApi.reducerPath]: categoryMainApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
  [productFavoritesApi.reducerPath]: productFavoritesApi.reducer,
  [productGetAllApi.reducerPath]: productGetAllApi.reducer,
  [productIdApi.reducerPath]: productIdApi.reducer,
  [productCategoryApi.reducerPath]: productCategoryApi.reducer,
  [getAllApi.reducerPath]: getAllApi.reducer,
  [meApi.reducerPath]: meApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      categoryMainApi.middleware,
      notificationApi.middleware,
      collectionApi.middleware,
      productFavoritesApi.middleware,
      productGetAllApi.middleware,
      productIdApi.middleware,
      productCategoryApi.middleware,
      getAllApi.middleware,
      meApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
