<<<<<<< HEAD
import React from 'react';
import Advantages from './components/Advantages/Advantages';
import NewsList from './components/News/NewsList';

const MainPage = () => {
    return (
        <div>
            MAIN
            <Advantages/>
            <NewsList/>
        </div>
    );
=======
import { MainSwiper } from "./swiper/Swiper";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MainSwiper />
    </div>
  );
>>>>>>> origin/dev
};

export default MainPage;
