import React from 'react';
import {Grid, Typography} from '@mui/material';

export default function MenuItem({name = 'Lorem', count = 333, color = 'white', img = null}) {
    return (
        <Grid container justifyContent={'center'} mb={'8px'}>
            {img ? null : <Grid sx={{...styles.container, backgroundColor: color}}></Grid>}

            <Grid item container flexDirection={'column'}>
                <Typography textAlign='center' component='p' variant='p' fontSize={12}>
                    {name}
                </Typography>

                <Typography textAlign='center' component='p' variant='p' fontSize={12}>
                    {count}
                </Typography>
            </Grid>
        </Grid>
    );
}

const styles = {
    container: {
        width: '40px',
        height: '40px',
        borderRadius: '10px',
    },
};
