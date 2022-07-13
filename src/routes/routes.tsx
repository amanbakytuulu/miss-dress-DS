import { MAIN_PAGE, PROFILE_PAGE, ADMIN_PAGE } from "../utils/path";

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
];

export const PRIVATE_ROUTES = [
  {
    path: ADMIN_PAGE,
    Component: <ProfilePage />,
  },
];
