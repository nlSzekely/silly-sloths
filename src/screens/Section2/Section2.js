import React from 'react';
import hero from '../../assets/heroImg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Marquee from 'react-fast-marquee';
import MysterySloth from '../../components/MysterySloth/MysterySloth';

import image1 from '../../assets/about-us-animation/1.png';
import image2 from '../../assets/about-us-animation/2.png';
import image3 from '../../assets/about-us-animation/3.png';
import image4 from '../../assets/about-us-animation/4.png';
import image5 from '../../assets/about-us-animation/5.png';
import image6 from '../../assets/about-us-animation/6.png';
import image7 from '../../assets/about-us-animation/7.png';
import image8 from '../../assets/about-us-animation/8.png';
import image9 from '../../assets/about-us-animation/9.png';
import image10 from '../../assets/about-us-animation/10.png';
import image11 from '../../assets/about-us-animation/11.png';
import image12 from '../../assets/about-us-animation/12.png';
import image13 from '../../assets/about-us-animation/13.png';
import image14 from '../../assets/about-us-animation/14.png';
import image15 from '../../assets/about-us-animation/15.png';
import image16 from '../../assets/about-us-animation/16.png';
import image17 from '../../assets/about-us-animation/17.png';
import image18 from '../../assets/about-us-animation/18.png';
import image19 from '../../assets/about-us-animation/19.png';
import image20 from '../../assets/about-us-animation/20.png';

export default function Section2() {
    return (
        <Grid container sx={{padding: 3, marginTop: '40px'}}>
            <Grid sx={{...styles.contentContainer, textAlign:"right"}} lg={6} xs={12} item flexDirection='column' >
                <Typography variant='h5'>MINT your own</Typography>
                <Typography mb={'40px'} variant='h5'>
                    Silly Sloth
                </Typography>
                <Typography mb={'8px'} component='p' variant='p'>
                    Buy a random Silly Sloth directly from us!
                </Typography>
                <Typography component='p' variant='p'>
                    You can choose the plan that suits yor needs the best.
                </Typography>
            </Grid>
            <Grid sx={styles.contentContainer} lg={6} xs={12} item >
            <MysterySloth/>

            </Grid>

        </Grid>
    );
}

const styles = {
    contentContainer: {
        padding: {
            lg: '0 50px',
            xs: '0 10px',
        },
    },
    mrq: {
        overflow: 'hidden',
        maxWidth: '700px',
    },
    mrqTop: {
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    mrqBottom: {
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    },
};
