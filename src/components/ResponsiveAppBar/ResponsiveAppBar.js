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
import Link from '@mui/material/Link';
import {DiscordIcon} from '../../components/Icons/Icons';

const pages = ['About us', 'Mint', 'Search', 'FAQ'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);

        switch (page) {
            case 'About us':
                scrollToSection('.section-1');
                break;
            case 'Mint':
                scrollToSection('.section-2');
                break;
            case 'Search':
                scrollToSection('.section-3');
                break;
            case 'FAQ':
                scrollToSection('.section-4');
                break;
        }
    };

    const scrollToSection = (section) => {
        document.querySelector(section).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <Container maxWidth='xl'>
            <Grid justifyContent='space-between' container>
                {/* Logo --- */}
                <Box sx={{display: {xs: 'none', md: 'flex'}, padding: '20px 0', alignItems: 'center'}}>
                    <img style={{maxWidth: 50}} src={logo} alt='logo' />
                    <Typography fontSize={'18px'} fontWeight='bold' ml={2}>
                        Silly Sloth Club
                    </Typography>
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
                    <Box sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'center', padding: '20px 0'}}>
                        <img style={{maxWidth: 50}} src={logo} alt='logo' />
                    </Box>
                </Box>

                <Box sx={{display: {xs: 'none', md: 'flex'}, marginLeft: 8}}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleCloseNavMenu(page)}
                            sx={{color: 'white', borderRadius: 0, px: 4}}
                        >
                            <Typography fontSize='20px' fontWeight={500}>
                                {page}
                            </Typography>
                        </Button>
                    ))}
                </Box>
                <Box sx={{justifySelf: 'flex-end', alignSelf: 'center'}}>
                    <IconButton size='large' color='inherit'>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton size='large' color='inherit'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{marginLeft: '-5px'}} size='large' color='inherit'>
                        <DiscordIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Container>
    );
};
export default ResponsiveAppBar;
