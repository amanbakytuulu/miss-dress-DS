import ProductsPage from "./Products/ProductsPage";

import { MainSwiper } from "./swiper/Swiper";

import styles from "./MainPage.module.scss";
import Advantages from "./components/Advantages/Advantages";
import NewsList from "./components/News/NewsList";
import CollactionContainer from "./components/CollactionContainer/CollactionContainer";
import SubscrubeContainer from "./components/SubscrubeContainer/SubscrubeContainer";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainSwiper />
      <ProductsPage />
      <CollactionContainer />
      <SubscrubeContainer />
      <Advantages />
      <NewsList />
    </div>
  );
};

export default MainPage;
