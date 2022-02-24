import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/logo-white.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';

const pages = ['About us', 'Collectibles', 'Roadmap', 'FAQ'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth='xl'>
            <Grid alignItems='center' justifyContent='space-between' container>
                {/* Logo --- */}
                <Box sx={{display: {xs: 'none', md: 'flex'}, padding: '20px 0'}}>
                    <img style={{maxWidth: 50}} src={logo} alt='logo' />
                </Box>

                <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

                <Box sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'center', padding: '20px 0'}}>
                    <img style={{maxWidth: 50}} src={logo} alt='logo' />
                </Box>

                <Box sx={{display: {xs: 'none', md: 'flex'}, marginLeft: 8}}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{my: 2, color: 'white', display: 'block', margin: '0 10px'}}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{justifySelf: 'flex-end'}}>
                    <IconButton size='large' color='inherit'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit'>
                        <TwitterIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Container>
    );
};
export default ResponsiveAppBar;
