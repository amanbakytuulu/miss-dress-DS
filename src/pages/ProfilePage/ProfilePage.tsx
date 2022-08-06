import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logoIcon.svg";
import mainImage from "../../assets/profilePage/image.png";
import { Modal } from "../../components";

import NewNumberForm from "../../components/Modal/NewNumberForm/NewNumberForm";

import classes from "./style.module.scss";
import FormComponent from "./components/FormComponent";

const ProfilePage = () => {
  const [isModalOpen, setOpenModal] = useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  return (
    <div className={classes.mainDiv}>
      <Container className={classes.mainContainer} sx={{ flexGrow: 1 }}>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <NewNumberForm />
        </Modal>
        <Grid
          sx={{ textAlign: { xs: "center", md: "left" } }}
          container
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <div className={classes.selectDiv}>
              <Link to="/">Главная</Link>
              <span>/</span>
              <Link to="/profile">Профиль</Link>
              <i className={classes.logoIcon}>
                <LogoIcon />
              </i>
            </div>
          </Grid>
          <Grid className={classes.logoGrid} item xs={12} md={6}>
            <img width="80%" src={mainImage} alt="" />
            <i className={classes.logoIconResp}>
              <LogoIcon />
            </i>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormComponent openModal={openModal} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfilePage;
