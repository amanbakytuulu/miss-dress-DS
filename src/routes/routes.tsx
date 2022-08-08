import {
  MAIN_PAGE,
  PROFILE_PAGE,
  ADMIN_PAGE,
  CART_PAGE,
  CONTACTS_PAGE,
  ABOUT_PAGE,
  DELIVERY_PAGE,
  CATEGORIES_PAGE,
  FAVORITES_PAGE,
  PRODUCT_PAGE,
  SEARCH_PAGE,
  ERROR_PAGE,
  ORDERS_PAGE,
  COLLECTION_PAGE,
  COLLECTION_PRODUCTS_PAGE,
  REQUISITE_PAGE,
  RETURN_PRODUCT,
  QUESTION_PAGE,
  MAKEORDER_PAGE,
  OFFERT_PAGE,
} from "../utils/path";

import {
  ProfilePage,
  ProductInfo,
  ProductPage,
  CategoriesPage,
  DeliveryPage,
  AboutUs,
  ContactsPage,
  CartPage,
  MainPage,
  FavoritesPage,
  CollectionPage,
  CollectionProductsPage,
  ErrorPage,
  SearchPage,
  OrderPage,
  OrderDetails,
  RequisitePage,
  ReturnProduct,
  QuestionPage,
  MakeOrderPage,
  OffertPage,
} from "../pages";

export const PUBLIC_ROUTES = [
  {
    path: MAIN_PAGE,
    Component: <MainPage />,
  },
  {
    path: PROFILE_PAGE,
    Component: <ProfilePage />,
  },
  {
    path: CART_PAGE,
    Component: <CartPage />,
  },
  {
    path: CONTACTS_PAGE,
    Component: <ContactsPage />,
  },
  {
    path: ABOUT_PAGE,
    Component: <AboutUs />,
  },
  {
    path: DELIVERY_PAGE,
    Component: <DeliveryPage />,
  },
  {
    path: CATEGORIES_PAGE,
    Component: <CategoriesPage />,
  },
  // {
  //   path: PRODUCT_PAGE + "/:id",
  //   Component: <ProductInfo />,
  // },
  {
    path: PRODUCT_PAGE + "/:id",
    Component: <ProductPage />,
  },
  // {
  //   path: PRODUCT_PAGE + "/:id",
  //   Component: <ProductInfo />,
  // },
  {
    path: ORDERS_PAGE,
    Component: <OrderPage />,
  },
  {
    path: ORDERS_PAGE + ":2",
    Component: <OrderDetails />,
  },
  {
    path: SEARCH_PAGE + "/title=:title",
    Component: <SearchPage />,
  },
  {
    path: ERROR_PAGE,
    Component: <ErrorPage />,
  },
  {
    path: FAVORITES_PAGE,
    Component: <FavoritesPage />,
  },
  {
    path: COLLECTION_PAGE,
    Component: <CollectionPage />,
  },
  {
    path: COLLECTION_PRODUCTS_PAGE,
    Component: <CollectionProductsPage />,
  },
  {
    path: REQUISITE_PAGE,
    Component: <RequisitePage />,
  },
  {
    path: RETURN_PRODUCT,
    Component: <ReturnProduct />,
  },
  {
    path: QUESTION_PAGE,
    Component: <QuestionPage />,
  },
  {
    path: MAKEORDER_PAGE,
    Component: <MakeOrderPage />,
  },
  {
    path: OFFERT_PAGE,
    Component: <OffertPage />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: ADMIN_PAGE,
    Component: <ProfilePage />,
  },
];
