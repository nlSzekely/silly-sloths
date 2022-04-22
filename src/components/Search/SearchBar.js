import React from 'react';
import {Grid} from '@mui/material';

export default function SearchBar() {
    return (
        <Grid container sx={{backgroundColor: 'red'}} justifyContent='center' alignItems='center'>
            <div style={styles.inputContainer}>
                <input placeholder={'Search # ID'} style={styles.input} />
                <div>icon here</div>
            </div>
            <div style={styles.selectContainer}>
                <select>
                    <option value='' disabled selected>
                        Sort by
                    </option>
                    <option value='price'>Price: low to high</option>
                    <option value='rarity'>Rarity: high to low</option>
                    <option value='trait'>Trait count: high to low</option>
                </select>
            </div>
        </Grid>
    );
}

const styles = {
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        flex: 1,
        height: '100%',
        paddingLeft: '20px',
    },
    inputContainer: {
        backgroundColor: '#FAFAFA',
        width: '700px',
        borderRadius: '8px',
        height: '35px',
        alignItems: 'center',
        overflow: 'hidden',
        display: 'flex',
        paddingRight: '20px',

    },
    selectContainer: {},
};
