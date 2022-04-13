import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo-white.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {DiscordIcon, CardanoLogo} from '../../components/Icons/Icons';
import { Link } from '@mui/material';

export default function Footer() {
    return (
        <Grid sx={styles.container} container justifyContent={'space-between'} alignItems='center'>
            <Grid item flexDirection={'column'}>
                <Grid item container alignItems={'center'}>
                    <img style={{maxWidth: 50}} src={logo} alt='logo' />
                    <Typography component='p' variant='p' fontSize={'18px'} fontWeight='bold' ml={2}>
                        Silly Sloth Club
                    </Typography>
                </Grid>
                <Typography mt={'8px'} component='p' variant='p' sx={{fontSize: {xs: '8px', md: '12px', lg: '14px'}}}>
                    Policy ID: 62cb09a756f66646c1a78e7ae27f7f5bd37c91cc00c5be2c938b5ec2
                </Typography>
            </Grid>

            <Grid flexDirection={'column'} item sx={{display: {md: 'flex', xs: 'none'}}}>
                <Typography mt={'8px'} component='p' variant='p' fontSize={'16px'}>
                    Powered by
                </Typography>

                <CardanoLogo />
            </Grid>

            <Grid item sx={{color: 'white', marginRight: 5}}>
            <IconButton target="_blank" href='https://twitter.com/sillyslothklub' size='large' color='inherit'>
                        <TwitterIcon color='#fffff' />
                    </IconButton>

                    <IconButton  target="_blank" href='https://www.instagram.com/sillysloth_club/' size='large' color='inherit'>
                        <InstagramIcon />
                    </IconButton>

                    <IconButton
                        href='https://www.facebook.com/Silly-Sloth-Club-100329609322351/'
                        size='large'
                        color='inherit'
                        target="_blank"
                    >
                        <FacebookIcon />
                    </IconButton>

                    <IconButton
                     target="_blank"
                        href='https://discord.gg/H6zkydZMZA'
                        sx={{marginLeft: '-5px'}}
                        size='large'
                        color='inherit'
                    >
                        <DiscordIcon />
                    </IconButton>
            </Grid>
        </Grid>
    );
}

const styles = {
    container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'primary.nav',
        padding: '16px 24px',
    },
};
