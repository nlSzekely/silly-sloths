import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MysterySloth from '../../components/MysterySloth/MysterySloth';

export default function Section3() {
    return (
        <Grid container sx={{padding: 3, marginTop: '40px'}} alignItems='center'>
            <Grid sx={{...styles.contentContainer, textAlign: 'right'}} lg={6} xs={12} item flexDirection='column'>
                <Typography variant='h3' mb={"40px"} component='h3' fontWeight='bold'>
                    FIND your favorite
                </Typography>

                <Typography mb={'8px'} component='p' variant='p' fontSize={'20px'}>
                    Here you can find all 10,000 Silly Sloths.
                </Typography>
                <Typography component='p' variant='p' fontSize={'20px'}>
                    Filter them by their ID or traits, find your prfect Sloth and buy it directly form us.
                </Typography>
                <Typography component='p' variant='p' fontSize={'20px'}>
                    Sloth and buy it directly form us.
                </Typography>
            </Grid>
            <Grid sx={styles.contentContainer} lg={6} xs={12} item container flexDirection='column'>
               
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
