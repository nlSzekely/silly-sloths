import React from 'react';
import NavBar from '../../components/HideAppBar/HideAppBar';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';
import logo from '../../assets/logo-white.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {DiscordIcon} from '../../components/Icons/Icons';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponsiveDraver';

import {Grid, Box, Typography, IconButton} from '@mui/material';

export default function Search() {
    return (
        <div  style={styles.container}>
            <Grid container justifyContent={"space-between"} py={1} px={2} >
                <div style={{display:'flex' , alignItems:'center'}}>
                    <img style={{maxWidth: 50, display:'inline-block'}}  src={logo} alt='logo' />
                    <Typography
                        component={'p'}
                        variant='p'
                        sx={{display: {xs: 'none', md: 'inline-block'}}}
                        fontSize={'18px'}
                        fontWeight='bold'
                        ml={2}
                    >
                        Silly Sloth Club
                    </Typography>
                </div>
                <Grid item  sx={{ color: 'white'}}>
                    <IconButton target='_blank' href='https://twitter.com/sillyslothklub' size='large' color='inherit'>
                        <TwitterIcon color='#fffff' />
                    </IconButton>

                    <IconButton
                        target='_blank'
                        href='https://www.instagram.com/sillysloth_club/'
                        size='large'
                        color='inherit'
                    >
                        <InstagramIcon />
                    </IconButton>

                    <IconButton
                        href='https://www.facebook.com/Silly-Sloth-Club-100329609322351/'
                        size='large'
                        color='inherit'
                        target='_blank'
                    >
                        <FacebookIcon />
                    </IconButton>

                    <IconButton
                        target='_blank'
                        href='https://discord.gg/H6zkydZMZA'
                        sx={{marginLeft: '-5px'}}
                        size='large'
                        color='inherit'
                    >
                        <DiscordIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container>

            </Grid>

        </div>
    );
}

const styles = {
    container: {
        background: 'rgb(24,28,36)',
        background: 'linear-gradient(0deg, rgba(22,24,29,1)  0%, rgba(24,28,36,1) 100%)',
        minHeight: '100vh',
    },
};
