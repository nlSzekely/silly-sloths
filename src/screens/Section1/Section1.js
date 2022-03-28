import React from 'react';
import hero from '../../assets/heroImg.png';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Section1() {
    return (
        <Grid container sx={{padding: 5}}>
            {/* <Grid item xs={12} sm={6}>
                <img style={{maxWidth: '100%', height: 'auto'}} src={hero} />
            </Grid>
            <Grid item justifyContent="flex-start" xs={12} sm={6} sx={{paddingLeft: {sm: '24px'}}}>
                <Typography component={'h1'} variant={'h3'}  >
                    Welcome to the Silly Sloth Club
                </Typography>
                <Typography component={"p"} variant={'h5'} sx={{marginTop:3}}>
                    The Silly Sloth Club is a collection of 10,000 AI-generated collectibles living on the Cardano
                    Blockchain.
                </Typography>
                <Typography component={"p"}  variant={'h5'} sx={{marginTop:2}}>
                    All 10,000 Silly Sloths are programmatically randomly generated from more than 115 attributes witch
                    blends together and gives a unic personality to each Sloth.
                </Typography>
                <Grid container sx={{marginTop:3}} justifyContent='center'>
                    <Button sx={{height:35}} variant='contained' color='secondary'>
                        <Typography>BUY ON CNFT</Typography>
                    </Button>
                </Grid>
            </Grid> */}
        </Grid>
    );
}
