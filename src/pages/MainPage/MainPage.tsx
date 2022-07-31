import ProductsPage from "./Products/ProductsPage";

import { MainSwiper } from "./swiper/Swiper";

import styles from "./MainPage.module.scss";
import Advantages from "./components/Advantages/Advantages";
import NewsList from "./components/News/NewsList";
import Collections from './components/Collections/Collections';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainSwiper />
      <ProductsPage />
      <Collections />
      <Advantages />
      <NewsList />
    </div>
  );
};

export default MainPage;
