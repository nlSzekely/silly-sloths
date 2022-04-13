import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SlothCarousel from '../../components/SlothCarousel/SlothCarousel';
import SearchInput from "../../components/SearchInput/SearchInput";

export default function Section3() {
    return (
        <Grid
            className='section-3'
            container
            sx={{padding: 3, minHeight: {xs: 'auto', md: '100vh'}, 
            background: 'rgb(14,17,22)',
            background: 'linear-gradient(0deg, rgba(14,17,22,1) 0%, rgba(19,23,29,1) 100%)'
        }}
            alignItems='center'
        >
            <Grid sx={styles.contentContainer} lg={6} xs={12} item flexDirection='column'>
                <Typography sx={styles.title} variant='h3' mb={'40px'} component='h3' fontWeight='bold'>
                    FIND your favorite
                </Typography>

                <Typography sx={styles.text} mb={'8px'} component='p' variant='p' fontSize={'20px'}>
                    Here you can find all 10,000 Silly Sloths.
                </Typography>
                <Typography sx={styles.text} component='p' variant='p' fontSize={'20px'}>
                    Filter them by their ID or traits, find your perfect
                </Typography>
                <Typography sx={styles.text} component='p' variant='p' fontSize={'20px'}>
                    Sloth and buy it directly form us.
                </Typography>
                {/* <SearchInput/> */}
                
            </Grid>
            <Grid sx={{position: 'relative'}} lg={6} xs={12} item container flexDirection='column'>
                <SlothCarousel />
                <Grid
                    sx={{
                        backgroundColor:' #394C5F',

                        width:{
                            xs:'300px',
                            sm:'500px'


                        } ,
                        height: '220px',
                        position: 'absolute',
                        left:"50%",
                        transform:"translateX(-51%)",
                        bottom: 0,
                        borderRadius:"20px"
                    }}
                ></Grid>
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
        marginTop:{
        xs:"40px",
        md:"0px"
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
    text: {
        textAlign: {
            xs: 'left',
            md:"center",
            lg: 'right',
        },
    },
    title:{
        textAlign: {
            xs: 'center',
            lg: 'right',
        },
    }
};
