import React from 'react';
import {Grid, Typography, Button} from '@mui/material';

export default function SlothCard({sloth}) {
console.log("🚀 ~ file: SlothCard.js ~ line 5 ~ SlothCard ~ sloth", sloth)
   
    return (
        <Grid sx={styles.card} p={'24px'}  container flexDirection={'column'} justifyContent='flex-end'  >
            <Grid item container justifyContent='center'>

            <img width={'150px'}  src={sloth.imgUrl} />
            </Grid>
            <Typography fontWeight={'bold'} fontSize={16} color='#fff'>
                {"#" + sloth?.Name?.split('#')[1]}
            </Typography>
            <Grid container>
                <Grid xs={5.5} sx={styles.infoLabel} item container flexDirection='column'>
                    <Typography fontSize={14} textAlign='center' color='#fff'>
                        Rarity
                    </Typography>
                    <Typography fontSize={14} textAlign='center' color='#fff'>
                        {sloth?.Rarity}
                    </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid xs={5.5} sx={styles.infoLabel} item flexDirection='column'>
                    <Typography fontSize={14} textAlign='center' color='#fff'>
                        Trait count
                    </Typography>
                    <Typography fontSize={14} textAlign='center' color='#fff'>
                        {sloth?.['Trait Count']}
                    </Typography>
                </Grid>
                <Grid mt={'24px'} container justifyContent='center'>
                    <Button color='secondary' variant='contained'>
                        <Typography variant='p' fontWeight='bold'>
                            35 ₳
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
          
        </Grid>
    );
}

const styles = {
    card: {
        height: '350px',
        width: '250px',
        backgroundColor: '#2F3E4D',
        borderRadius:'8px',
        marginRight:'16px',
        marginBottom: '16px'
    },
    infoLabel: {
        backgroundColor: '#2A333D',
        borderRadius: '15px',
        padding: '4px 0',
    },
    imgBackground:{
        height: '130px',
        backgroundColor: '#BBAEC1',
        borderRadius: '8px'
    }
};
