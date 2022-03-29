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
            nav:"#121417"
        },
        secondary: {
            main: '#0280DF',
        },
        
    },
    typography: {
        fontFamily: 'Rubik',
        button: {
          textTransform: 'none'
        },
        h1:{
            color: "#ffffff"
        },
        h3:{
            color: "#ffffff"  
        },
        h5:{
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
                </Grid>
            </CssBaseline>
        </ThemeProvider>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        width: "100%",
        background: 'linear-gradient(180deg, rgba(24,28,36,1) 0%, rgba(22,24,29,1) 100%)',
    },
};

export default App;
