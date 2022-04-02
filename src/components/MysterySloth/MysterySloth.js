import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import singleSloth from '../../assets/sl-1.png';
import multiSloth from '../../assets/sl-2.png';

export default function MysterySloth({quantity = 1, price = 30, singleSlothImg = true}) {
    return (
        <Grid sx={{position: 'relative', maxWidth: '150px', textAlign: 'center'}} justifyContent='center'>
            <Grid sx={{position: 'relative'}}>
                <img width='100px' src={singleSlothImg ? singleSloth : multiSloth} />
                <Typography
                    sx={{position: 'absolute', color: 'white', top: 36, left: '50%', transform: 'translateX(-50%)', fontSize:"30px", opacity:0.3}}
                >
                    ?
                </Typography>
            </Grid>

            <Button
                sx={{
                    marginTop: '-20px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '230px',
                    bottom: -40,
                }}
                variant='contained'
                color='secondary'
            >
                <Grid flexDirection='column'>
                    <Typography variant='p' fontWeight='bold' fontSize={12} component='p'>
                        MINT 1
                    </Typography>
                    <Typography variant='p' fontWeight='bold' fontSize={12} component='p'>
                        FOR 30 ₳
                    </Typography>
                </Grid>
            </Button>
        </Grid>
    );
}
