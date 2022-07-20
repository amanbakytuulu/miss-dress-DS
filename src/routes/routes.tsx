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
  ERROR_PAGE,
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
} from "../pages";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
    path: ERROR_PAGE,
    Component: <ErrorPage />,
  },
  {
    path: FAVORITES_PAGE,
    Component: <FavoritesPage />,
  },
];

export const PRIVATE_ROUTES = [
  {
    path: ADMIN_PAGE,
    Component: <ProfilePage />,
  },
];
