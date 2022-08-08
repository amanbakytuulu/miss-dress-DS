import {
  MAIN_PAGE,
  PROFILE_PAGE,
  CART_PAGE,
  CONTACTS_PAGE,
  ABOUT_PAGE,
  DELIVERY_PAGE,
  CATEGORIES_PAGE,
  FAVORITES_PAGE,
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
  ADMIN_PAGE_COLLECTIONS,
  ORDERS_PAGE,
  COLLECTION_PAGE,
  COLLECTION_PRODUCTS_PAGE,
} from "../utils/path";

import {
  ProfilePage,
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
} from "../pages";
import {
  DashBoard,
  Users,
  UserDetails,
  Products,
  CollectionInfo,
  Sales,
  ProductDetails,
  Cart,
  Advertising,
} from "../pages/AdminPage";

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
  //   path: PRODUCT_PAGE,
  //   Component: <ProductPage />,
  // },
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
];

export const PRIVATE_ROUTES = [
  {
    path: ADMIN_PAGE_DASHBOARD,
    Component: <DashBoard />,
  },
  {
    path: ADMIN_PAGE_USERS,
    Component: <Users />,
  },
  {
    path: ADMIN_PAGE_USERS + "/:id",
    Component: <UserDetails />,
  },
  {
    path: ADMIN_PAGE_PRODUCTS,
    Component: <Products />,
  },
  {
    path: ADMIN_PAGE_PRODUCTS + "/:productId",
    Component: <ProductDetails />,
  },
  {
    path: ADMIN_PAGE_COLLECTIONS + "/:id",
    Component: <CollectionInfo />,
  },
  {
    path: ADMIN_PAGE_SALES,
    Component: <Sales />,
  },
  {
    path: ADMIN_PAGE_CART,
    Component: <Cart />,
  },
  {
    path: ADMIN_PAGE_AD,
    Component: <Advertising />,
  },
  {
    path: ADMIN_PAGE_CHAT,
    Component: <DashBoard />,
  },
];
