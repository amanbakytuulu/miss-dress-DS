import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import { IFooterIcons } from '../../../types/FooterTypes/FooterTypes';
import whatsAppIcon from '../../../assets/Footer/Whatsapp.svg'
import telegramIcon from '../../../assets/Footer/telegram.svg'
import instagramIcon from '../../../assets/Footer/instagram.svg'
import facebookIcon from '../../../assets/Footer/facebook.svg'





const IconsFooter = () => {

    const [icons,setIcons] = useState<IFooterIcons[]>([])
    setIcons([
        {
            icon: whatsAppIcon,
            path: 'fe',
        },
        {
            icon: telegramIcon,
            path: 'fe',
        },
        {
            icon: instagramIcon,
            path: 'fe',
        },
        {
            icon: facebookIcon,
            path: 'fe',
        },
    ])
    return (
        <div style={{flexGrow:'1'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>

                </Grid>
            </Grid>
        </div>
    );
};

export default IconsFooter;