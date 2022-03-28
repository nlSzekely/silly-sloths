import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ResponsiveAppBar from "../ResponsiveAppBar/ResponsiveAppBar";

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide  appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}


export default function HideAppBar(props) {
    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar sx={{ borderBottomLeftRadius: 30,borderBottomRightRadius:30, overflow:"hidden", backgroundColor:"primary.nav"}} > 
                    <ResponsiveAppBar />
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
        </React.Fragment>
    );
}
