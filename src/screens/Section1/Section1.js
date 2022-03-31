import React from 'react';
import hero from '../../assets/heroImg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Marquee from 'react-fast-marquee';

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

import './Section.css';

export default function Section1() {
    return (
        <Grid container  mt={"40px"} sx={{ padding: 3, minHeight:"100vh"}}>
            <Grid
                item
                xs={12}
                lg={6}
                sx={styles.contentContainer}
                justifyContent="center"
                container
            >
                <Marquee
                    pauseOnHover
                    style={{...styles.mrqTop, ...styles.mrq}}
                    gradientWidth={80}
                    gradientColor={[20, 20, 20]}
                >
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image1} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image2} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image3} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image4} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image5} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image6} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image7} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image8} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image9} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image10} />
                </Marquee>
                <Marquee
                    pauseOnHover
                    style={{...styles.mrqBottom, ...styles.mrq}}
                    gradientWidth={80}
                    gradientColor={[20, 20, 20]}
                    direction='right'
                >
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image11} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image12} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image13} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image14} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image15} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image16} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image17} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image18} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image19} />
                    <img className='img' style={{ maxWidth: 200, height: 'auto' }} src={image20} />
                </Marquee>
            </Grid>
            <Grid
                sx={styles.contentContainer}
                item
                xs={12}
                lg={6}
                justifyContent="center"
                container
            >
                <Grid item width={"600px"}>
                    <Typography sx={{ marginTop: { xs: "24px", lg: "0px" } }} mb={'16px'} textAlign='center' fontWeight='bold' variant='h3'>
                        Welcome to the
                    </Typography>
                    <Typography mb={'24px'} textAlign='center' fontWeight='bold' variant='h3'>
                        Silly Sloth Club
                    </Typography>
                    <Typography component='p' mb={'24px'} fontSize={'20px'} variant='p'>
                        The Silly Sloth Club is a collection of 10,000 AI-generated collectibles living on the Cardano
                        jungle.
                    </Typography>
                    <Typography component='p' variant='p' fontSize={'20px'}>
                        All 10,000 Silly Sloths are programmatically randomly generated from more than 120 attributes witch
                        blends together perfectly and gives a unic personality to each Sloth.
                    </Typography>

                    <Grid item  mt={"24px"} justifyContent="space-around">
                        <Button color='secondary' variant='contained' >
                            <Typography fontWeight="bold" >BUY ON CNFT.io</Typography>
                        </Button>
                        <Button color='secondary' variant='contained' >
                            <Typography fontWeight="bold">BUY ON jpg.store</Typography>
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>

    );
}


const styles = {
    contentContainer:{
        padding: {
            lg: '0 50px',
            xs: '0 10px'
        },
        maxHeight: 400
    },
    mrq:{
        overflow: 'hidden',
        maxWidth: "700px",
    },
    mrqTop: {
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    mrqBottom: {
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    }
};