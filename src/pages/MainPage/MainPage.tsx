import { MainSwiper } from "./swiper/Swiper";
import styles from "./MainPage.module.scss";
import Advantages from "./components/Advantages/Advantages";
import NewsList from "./components/News/NewsList";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainSwiper />
      <Advantages />
      {<NewsList />}
    </div>
  );
};

export default MainPage;
