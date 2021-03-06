import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from '@mui/material';

import singleSloth from '../../assets/sl-1.png';
import multiSloth from '../../assets/sl-2.png';

export default function MysterySloth({quantity = 1, price = 30, singleSlothImg = true, link}) {
    return (
        <Grid sx={{position: 'relative', textAlign: 'center', width: '230px'}}>
            <Grid sx={{position: 'relative'}}>
                <img width={singleSlothImg ? '150px' : '230px'} src={singleSlothImg ? singleSloth : multiSloth} />
                <Typography
                    fontWeight={'bold'}
                    sx={{
                        position: 'absolute',
                        color: 'white',
                        top: singleSlothImg ? 70 : 36,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '30px',
                        opacity: 0.2,
                    }}
                >
                    ?
                </Typography>
            </Grid>

            <Link href={link} target="_blank" sx={{textDecoration:"none"}} >
                <Button variant='contained' color='secondary' sx={{marginTop: '-24px'}} fullWidth>
                    <Grid flexDirection='column'>
                        <Typography variant='p' fontWeight='bold' fontSize={12} component='p'>
                            MINT {quantity}
                        </Typography>
                        <Typography variant='p' fontWeight='bold' fontSize={12} component='p'>
                            FOR {price} ₳
                        </Typography>
                    </Grid>
                </Button>
            </Link>
        </Grid>
    );
}
