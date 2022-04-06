import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MysterySloth from '../../components/MysterySloth/MysterySloth';

export default function Section2() {
    return (
        <Grid className='section-2' container  sx={{ padding: 3,backgroundColor:"red", minHeight:{xs:"auto",md:"100vh"}}} alignItems='center'>
            <Grid sx={{...styles.contentContainer}} lg={6} xs={12} item flexDirection='column'>
                <Typography sx={styles.title} variant='h3' component='h3' fontWeight='bold'>
                    MINT your own
                </Typography>
                <Typography sx={styles.title} mb={'40px'} variant='h3' component='h3' fontWeight='bold'>
                    Silly Sloth
                </Typography>
                <Typography sx={styles.text} component='p' mb={'8px'} fontSize={'20px'} variant='p'>
                    Buy a random Silly Sloth directly from us!
                </Typography>
                <Typography sx={styles.text} component='p' fontSize={'20px'} variant='p'>
                    You can choose the plan that suits your needs the best.
                </Typography>
            </Grid>
            <Grid sx={styles.contentContainer} lg={6} xs={12} item container flexDirection='column'>
                <Grid item container justifyContent={'space-around'}>
                    <MysterySloth link="https://payment.nft-maker.io/?p=2a15b68381e3483ea6fda51a775d17d8&c=1" />
                    <MysterySloth link="https://payment.nft-maker.io/?p=2a15b68381e3483ea6fda51a775d17d8&c=3" quantity={3} price={87} singleSlothImg={false} />
                </Grid>
                <Grid mt={'40px'} item container justifyContent={'space-around'}>
                    <MysterySloth link="https://payment.nft-maker.io/?p=2a15b68381e3483ea6fda51a775d17d8&c=5" quantity={5} price={140} singleSlothImg={false} />
                    <MysterySloth link="https://payment.nft-maker.io/?p=2a15b68381e3483ea6fda51a775d17d8&c=10" quantity={10} price={270} singleSlothImg={false} />
                </Grid>
            </Grid>
        </Grid>
    );
}

const styles = {
    contentContainer: {
        padding: {
            lg: '0 50px',
            xs: '24px 10px 0px 10px',
        },
        textAlign:{
            xs:"center",
            sm:"right"
        }

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
    text:{
        textAlign:{
            xs:"left",
            sm:"right"
        }
    }
};
