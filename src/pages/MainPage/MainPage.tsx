import { MainSwiper } from "./swiper/Swiper";

import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainSwiper />
    </div>
  );
};

export default MainPage;
