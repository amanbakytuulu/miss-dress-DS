import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FooterList from "./components/FooterList";
import IconsFooter from "./components/IconsFooter";
import classes from "./style.module.css";

const Footer = () => {
  const liElements = [
    {
      title: "О нас",
      path: "#",
    },
    {
      title: "+996377221272",
      path: "#",
    },
    {
      title: "missdress@gmail.com",
      path: "#",
    },
    {
      title: "Исанова 79",
      path: "#",
    },
  ];
  return (
    <div className={classes.mainDiv}>
      <Container>
        <Grid container spacing={2}>
          <Grid className={classes.icons} item xs={12} md={12}>
            <IconsFooter />
          </Grid>
          <Grid
            sx={{ display: { xs: "none", md: "flex" } }}
            className={classes.list}
            item
            xs={12}
            md={12}
          >
            <FooterList />
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.responsiveLi}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {liElements.map((item, index) => (
              <ul key={index}>
                <Link to={item.path}>{item.title}</Link>
              </ul>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
