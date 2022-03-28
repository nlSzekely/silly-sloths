import React from 'react';
import hero from '../../assets/heroImg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

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

import './Section1.css';

export default function Section1() {
    return (
        <Grid container sx={{padding: 5}}>
            <div style={{borderTopLeftRadius: 35, borderBottomLeftRadius: 35}} className='carousel-container'>
                <div className='gradient-top'></div>

                <div
                    className='mover-1'
                    style={{
                        maxWidth: '300px',
                    }}
                >
                    <img className='img' src={image1} />
                    <img className='img' src={image2} />
                    {/* <img className='img' src={image3} />
                    <img className='img' src={image4} />
                    <img className='img' src={image5} />
                    <img className='img' src={image6} />
                    <img className='img' src={image7} />
                    <img className='img' src={image8} />
                    <img className='img' src={image9} />
                    <img className='img' src={image10} /> */}
                </div>
                <div
                    className='mover-2'
                    style={{
                        maxWidth: '300px',
                    }}
                >
                    <img className='img' src={image1} />
                    <img className='img' src={image2} />
                    {/* <img className='img' src={image3} />
                    <img className='img' src={image4} />
                    <img className='img' src={image5} />
                    <img className='img' src={image6} />
                    <img className='img' src={image7} />
                    <img className='img' src={image8} />
                    <img className='img' src={image9} />
                    <img className='img' src={image10} /> */}
                </div>
                <div className='gradient-bottom'></div>

            </div>
{/* 
            <div style={{borderTopRightRadius:35, borderBottomRightRadius:35}} className='carousel-container'>
                <div className='gradient-top'></div>

                <div
                    className='mover-1-reverse'
                    style={{
                        maxWidth: '300px',
                    }}
                >
                    <img className='img' src={image11} />
                    <img className='img' src={image12} />
                    <img className='img' src={image13} />
                    <img className='img' src={image14} />
                    <img className='img' src={image15} />
                    <img className='img' src={image16} />
                    <img className='img' src={image17} />
                    <img className='img' src={image18} />
                    <img className='img' src={image19} />
                    <img className='img' src={image20} />
                </div>
                <div
                    className='mover-2-reverse'
                    style={{
                        maxWidth: '300px',
                    }}
                >
                    <img className='img' src={image11} />
                    <img className='img' src={image12} />
                    <img className='img' src={image13} />
                    <img className='img' src={image14} />
                    <img className='img' src={image15} />
                    <img className='img' src={image16} />
                    <img className='img' src={image17} />
                    <img className='img' src={image18} />
                    <img className='img' src={image19} />
                    <img className='img' src={image20} />
                </div>
                <div className='gradient-bottom'></div>
            </div> */}
        </Grid>
    );
}
