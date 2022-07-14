import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { categoryApi } from "./features/Category/category/categoryQuery";
import { categoryMainApi } from "./features/Category/categoryMain/categoryMainQuery";
import { notificationApi } from "./features/Notification/notificationQuery";
import { productFavoritesApi } from "./features/Product/productFavorites/productFavoritesQuery";
import { productGetAllApi } from "./features/Product/productGetAll/ProductGetAllQuery";
import { getAllApi } from "./features/User/getAll/getAllQuery";
import { meApi } from "./features/User/userMe/meQuery";

const rootReducer = combineReducers({
  [categoryApi.reducerPath]: categoryApi.reducer,
  [categoryMainApi.reducerPath]: categoryMainApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [productFavoritesApi.reducerPath]: productFavoritesApi.reducer,
  [productGetAllApi.reducerPath]: productGetAllApi.reducer,
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
      productFavoritesApi.middleware,
      productGetAllApi.middleware,
      getAllApi.middleware,
      meApi.middleware
    ),
});
