import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DrawerExpandItem from '../DrawerExpandItem/DrawerExpandItem';

// Menu components
import BackgroundItem from '../MenuItems/BackgroundItem';

const drawerWidth = 340;

const colorsData = [
    {
        id: '1',
        name: 'Light grey',
        code: '#CDCDCF',
    },
    {
        id: '2',
        name: 'Terracotta',
        code: '#E2A293',
    },
    {
        id: '3',
        name: 'Bubble gum',
        code: '#BBAEC1',
    },
    {
        id: '4',
        name: 'Levander',
        code: '#BBAEC1',
    },
    {
        id: '5',
        name: 'Lilac',
        code: '#9AA1C1',
    },
    {
        id: '6',
        name: 'Baby',
        code: '#87C0DD',
    },
    {
        id: '7',
        name: 'Air force',
        code: '#6696A3',
    },
    {
        id: '8',
        name: 'Olive',
        code: '#B8C6AB',
    },
    {
        id: '9',
        name: 'Moss',
        code: '#8DB7A5',
    },
    {
        id: '10',
        name: 'Emerald',
        code: '#40B59E',
    },
];

const BackgroundContainer = () => {
    return (
        <Grid
            sx={{
                // backgroundColor: '#2e3742',
                // borderBottomLeftRadius: '8px',
                // borderBottomRightRadius: '8px',
            }}
            container
            p={'16px'}
        >
            {colorsData.map((item) => (
                <Grid item xs={4}>
                    <BackgroundItem key={item.id} name={item.name} color={item.code} />
                </Grid>
            ))}
        </Grid>
    );
};

const menuData = [
    {
        id: '1',
        title: 'Background',
        component: <BackgroundContainer />,
    },
    {
        id: '2',
        title: 'Body',
        component: null,
    },
    {
        id: '3',
        title: 'Eyes',
        component: null,
    },
    {
        id: '4',
        title: 'Mouth',
        component: null,
    },
    {
        id: '5',
        title: 'Clothes',
        component: null,
    },
    {
        id: '6',
        title: 'Sunglass',
        component: null,
    },
    {
        id: '7',
        title: 'Hat',
        component: null,
    },
    {
        id: '8',
        title: 'Accessories',
        component: null,
    },
];

function ResponsiveDrawer(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{padding: '0px 24px'}}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <svg
                        width='20'
                        height={20 * 1.03}
                        viewBox='0 0 28 29'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M10.6343 13.7036C10.9308 14.0348 11.0936 14.4674 11.0936 14.9149V28.1023C11.0936 28.896 12.0268 29.2988 12.5791 28.7408L16.1635 24.525C16.6432 23.9343 16.9077 23.6419 16.9077 23.0571V14.9179C16.9077 14.4704 17.0735 14.0377 17.3671 13.7065L27.6523 2.2526C28.4226 1.39333 27.8296 0 26.69 0H1.31125C0.171676 0 -0.424275 1.39035 0.349008 2.2526L10.6343 13.7036Z'
                            fill='#FAFAFA'
                        />
                    </svg>
                    <Typography ml='8px' variant='p' component='p'>
                        Filters
                    </Typography>
                </Grid>
            </Toolbar>
            <Divider />
            <List>
                {menuData.map((data, index) => (
                    <DrawerExpandItem title={data.title} key={data.id}>
                        {data.component}
                    </DrawerExpandItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar
                position='fixed'
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    {props.header}
                </Toolbar>
            </AppBar>
            <Box component='nav' sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}} aria-label='mailbox folders'>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderWidth: 0,
                            backgroundColor: '#2F3E4D',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant='permanent'
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderWidth: 0,
                            backgroundColor: '#2F3E4D',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component='main' sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}



export default ResponsiveDrawer;
