import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {green, purple} from '@mui/material/colors';
import {ThemeProvider, CssBaseline} from '@mui/material';
import Grid from '@mui/material/Grid';

import NavBar from './components/HideAppBar/HideAppBar';
import ScrollTop from './components/ScrollToTop/ScrollToTop';
import Section1 from './screens/Section1/Section1';
import Section2 from './screens/Section2/Section2';
import Section4 from './screens/Section4/Section4';
import Footer from './components/Footer/Footer';

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
                    borderRadius: '15px',
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Grid sx={styles.container}>
                    <NavBar />
                    <ScrollTop />
                    <Section1 />
                    <Section2 />
                    <Section4 />

                    <Footer />
                </Grid>
            </CssBaseline>
        </ThemeProvider>
    );
}

const styles = {
    container: {
        width: '100%',
        background: 'linear-gradient(180deg, rgba(24,28,36,1) 0%, rgba(22,24,29,1) 100%)',
    },
};

export default App;
