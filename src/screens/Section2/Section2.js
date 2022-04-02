import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MysterySloth from '../../components/MysterySloth/MysterySloth';

export default function Section2() {
    return (
        <Grid container sx={{padding: 3, marginTop: '40px'}} alignItems='center'>
            <Grid sx={{...styles.contentContainer, textAlign: 'right'}} lg={6} xs={12} item flexDirection='column'>
                <Typography  component="p" fontSize={"30px"} variant='p'>
                    MINT your own
                    </Typography>
                <Typography  component="p" fontSize={"30px"} mb={'40px'} variant='p'>
                    Silly Sloth
                </Typography>
                <Typography mb={'8px'} component='p' variant='p' fontSize={'20px'}>
                    Buy a random Silly Sloth directly from us!
                </Typography>
                <Typography component='p' variant='p' fontSize={'20px'}>
                    You can choose the plan that suits yor needs the best.
                </Typography>
            </Grid>
            <Grid sx={styles.contentContainer} lg={6} xs={12} item container flexDirection='column'>
                <Grid item container justifyContent={'space-around'} >
                    <MysterySloth />
                    <MysterySloth quantity={3} price={87} singleSlothImg={false} />
                </Grid>
                <Grid mt={'40px'} item container justifyContent={'space-around'}>
                    <MysterySloth quantity={5} price={140} singleSlothImg={false} />
                    <MysterySloth quantity={10} price={270} singleSlothImg={false} />
                </Grid>
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
