import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import React from 'react';
import {green, purple} from '@mui/material/colors';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import NavBar from './components/HideAppBar/HideAppBar';
import ScrollTop from './components/ScrollToTop/ScrollToTop';
import Section1 from './screens/Section1/Section1';
import Section2 from './screens/Section2/Section2';
import Section3 from './screens/Section3/Section3';
import Section4 from './screens/Section4/Section4';
import Footer from './components/Footer/Footer';
import Search from './screens/Search/Search';
import NotFound from './screens/NotFound/NotFound';
import TimeLine from "./screens/TimeLine/TimeLine";




let theme = createTheme({
    palette: {
        primary: {
            main: '#18181B',
            nav: '#121417',
        },
        secondary: {
            main: '#209DEF',
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },

    typography: {
        fontFamily: 'Rubik',
        button: {
            textTransform: 'none',
        },
        h1: {
            color: '#ffffff',
        },
        h3: {
            color: '#ffffff',
        },
        h5: {
            color: '#ffffff',
        },
        p: {
            color: '#ffffff',
        },
    },
});

theme = responsiveFontSizes(theme);


const MainPage = () => {


    return (
        <Grid sx={styles.container}>
            <ScrollTop />
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <TimeLine/>
            <Section4 />
            <Footer />
        </Grid>
    );
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </CssBaseline>
        </ThemeProvider>
    );
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: 'rgb(14,17,22)',
    },
};

export default App;
