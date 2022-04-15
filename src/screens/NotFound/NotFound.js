import React from 'react';
import {Typography, Button, Grid} from '@mui/material';
import NotFoundImg from '../../assets/404.png'

export default function NotFound() {
    return (
        <Grid  py="40px" px='24px' flexWrap={'nowrap'} container justifyContent='center' alignItems='center' sx={styles.container} flexDirection='column'>
            <Grid  flex={1} mb='24px' container justifyContent='center' sx={styles.innerContainer} alignItems='flex-end'>
                <img style={styles.img}  src={NotFoundImg} alt="Not Found Image" />

            </Grid>
            <Typography mb='16px' component='h5' variant='h5'>
                Page Not Found
            </Typography>
            <Typography style={styles.text} color={'#A7A7A7'}>We're sorry, the page you requested could not be found</Typography>
            <Typography style={styles.text}  mb='24px' color={'#A7A7A7'}>Please go back to the homepage</Typography>
            <Button sx={{width: '200px'}} color='secondary' variant='contained'>
                <Typography variant='p' m={'5px 20px'} fontWeight='bold'>
                    GO HOME
                </Typography>
            </Button>
        </Grid>
    );
}

const styles = {
    container: {
        background: 'rgb(24,28,36)',
        background: 'linear-gradient(0deg, rgba(22,24,29,1)  0%, rgba(24,28,36,1) 100%)',
        minHeight: '100vh',
    },
    innerContainer: {
        backgroundColor: '#394C5F',
        maxWidth: '630px',
        borderRadius: {
            xs:'60px',
            md:'80px'
        } ,
        maxHeight:{
            xs:'200px',
            sm: '350px'
        },
    },
    text:{
        textAlign:"center"
    },
    img:{
        position:'absolute',
        width:'75%',
        display:'block',
        maxWidth:' 500px',
        height: 'auto',
    }
};
