import {
  MAIN_PAGE,
  PROFILE_PAGE,
  ADMIN_PAGE,
  CART_PAGE,
  CONTACTS_PAGE,
  ABOUT_PAGE,
  DELIVERY_PAGE,
  CATEGORIES_PAGE,
  PRODUCT_PAGE,
  SEARCH_PAGE,
  ERROR_PAGE,
  ADMIN_PAGE_DASHBOARD,
  ADMIN_PAGE_USERS,
  ADMIN_PAGE_PRODUCTS,
  ADMIN_PAGE_SALES,
  ADMIN_PAGE_CART,
  ADMIN_PAGE_AD,
  ADMIN_PAGE_CHAT,
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
  ErrorPage,
  SearchPage,
} from "../pages";
import { DashBoard } from "../pages/AdminPage";

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
  {
    path: PRODUCT_PAGE + "/:id",
    Component: <ProductInfo />,
  },
  {
    path: PRODUCT_PAGE,
    Component: <ProductPage />,
  },
  {
    path: PRODUCT_PAGE + "/:id",
    Component: <ProductInfo />,
  },
  {
    path: SEARCH_PAGE,
    Component: <SearchPage />,
  },
  {
    path: ERROR_PAGE,
    Component: <ErrorPage />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: ADMIN_PAGE_DASHBOARD,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_USERS,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_PRODUCTS,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_SALES,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_CART,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_AD,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_CHAT,
    Component: <DashBoard />,
  },
];
