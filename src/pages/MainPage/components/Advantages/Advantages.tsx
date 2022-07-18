import { Box } from "@mui/material";
import React from "react";
import { Container, Grid } from "@mui/material";

import styles from "./Advantages.module.scss";
import AdvantagesList from "./AdvantagesList";

const Advantages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.main_header}>Наши преимущества</h1>
        <Grid container>
          <Grid className={styles.list} item xs={12} md={12}>
            <AdvantagesList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Advantages;
