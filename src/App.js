import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';

import NavBar from './components/HideAppBar/HideAppBar';
import ScrollTop from "./components/ScrollToTop/ScrollToTop";
import Section1 from './screens/Section1/Section1';

let theme = createTheme({
    palette: {
        primary: {
            main: '#18181B',
        },
        secondary: {
            main: '#0280DF',
        },
        
    },
    typography: {
        button: {
          textTransform: 'none'
        },
        h1:{
            color: "#ffffff"
        },
        h3:{
            color: "#ffffff"  
        },
        p:{
            color: "#ffffff"  
        }
      
      }
});

theme = responsiveFontSizes(theme);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Grid sx={styles.container}>
                    <NavBar />
                    <ScrollTop />
                    <Section1/>
                    <Section1/>
                    <Section1/>
                    <Section1/>
                    <Section1/>


                </Grid>
            </CssBaseline>
        </ThemeProvider>
    );
}

const styles = {
    container: {
        backgroundColor: 'primary.main',
        minHeight: '100vh',
        width: "100%"
    },
};

export default App;
