import React from "react";
import classes from "./Collections.module.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import winter from "../../../../assets/сollectionPage/collectionsSeason/winter.png";
import spring from "../../../../assets/сollectionPage/collectionsSeason/spring.png";
import summer from "../../../../assets/сollectionPage/collectionsSeason/summer.png";
import autumn from "../../../../assets/сollectionPage/collectionsSeason/autumn.png";
import { Container } from "@mui/material";

function Collections() {
    const seasons = [{ id: 1, img: winter, title: 'Зима' },
    { id: 2, img: spring, title: 'Весна' },
    { id: 3, img: summer, title: 'Лето' },
    { id: 4, img: autumn, title: 'Осень' }];

    return (
        <div className={classes.collections}>
            <Container>
                <h1 className={classes.collections__title}>
                    Коллекция
                </h1>
                <div className={classes.collections__items}>
                    {
                        seasons.map((season) => {
                            return (
                                <Card className={classes.collections__item}>
                                    <CardMedia
                                        component="img"
                                        className={classes.collections__img}
                                        sx={season.id % 2 == 0 ? { order: 2 } : {}}
                                        image={season.img}
                                        alt={season.title}
                                    />
                                    <CardContent
                                        className={classes.collections__content}
                                        sx={season.id % 2 == 0 ? { order: 1 } : {}}>
                                        <Typography component="div" variant="h5" className={classes.collections__text}>
                                            {season.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                    {/* <Card className={classes.collections__item}>
                        <CardMedia
                            component="img"
                            className={classes.collections__img}
                            image={winter}
                            alt="Зимний Сезон"
                        />
                        <CardContent className={classes.collections__content}>
                            <Typography component="div" variant="h5" className={classes.collections__text}>
                                ЗИМА
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.collections__item}>
                        <CardMedia
                            component="img"
                            className={classes.collections__img}
                            sx={{ order: 2 }}
                            image={spring}
                            alt="Весенний Сезон"
                        />
                        <CardContent
                            className={classes.collections__content}
                            sx={{ order: 1 }}
                        >
                            <Typography component="div" variant="h5" className={classes.collections__text}>
                                ВЕСНА
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.collections__item}>
                        <CardMedia
                            component="img"
                            className={classes.collections__img}
                            image={summer}
                            alt="Летний Сезон"
                        />
                        <CardContent className={classes.collections__content}>
                            <Typography component="div" variant="h5" className={classes.collections__text}>
                                ЛЕТО
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className={classes.collections__item}>
                        <CardMedia
                            component="img"
                            className={classes.collections__img}
                            sx={{ order: 2 }}
                            image={autumn}
                            alt="Осенний Сезон"
                        />
                        <CardContent
                            className={classes.collections__content}
                            sx={{ order: 1 }}
                        >
                            <Typography component="div" variant="h5" className={classes.collections__text}>
                                ОСЕНЬ
                            </Typography>
                        </CardContent>
                    </Card> */}
                </div>
            </Container>
        </div>
    )
}

export default Collections;                                                                                                            