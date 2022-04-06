import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {Grid, Typography} from '@mui/material';

export default function NestedList({
    title = 'What is the Silly Sloth Club?',
    description = 'It is a collection of 10,000 unique Silly Sloth NFT-s, digital collectibles on the Cardano blockchain.',
}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid container>
            <Grid
                py={'10px'}
                mt={'24px'}
                sx={styles.container}
                onClick={handleClick}
                container
                justifyContent='space-between'
                alignItems='center'
            >
                <Typography variant='p' component='p'>
                    {title}
                </Typography>
                <div style={styles.iconContainer}>
                    {open ? <ExpandLess color='#2E3D4B' /> : <ExpandMore color='#2E3D4B' />}
                </div>
            </Grid>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <Typography px={'20px'} mt={'24px'} variant='p' component='p'>
                    {description}
                </Typography>
            </Collapse>
        </Grid>
    );
}

const styles = {
    container: {
        backgroundColor: '#2E3D4B',
        borderRadius: '16px',
        cursor: 'pointer',
        px: {
            xs: '14px',
            sm: '24px',
        },
    },
    iconContainer: {
        backgroundColor: 'white',
        borderRadius: '6px',
        width: '23px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '23px',
    },
};
