import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';

import NavBar from './components/HideAppBar/HideAppBar';
import ScrollTop from "./components/ScrollToTop/ScrollToTop";

const theme = createTheme({
    palette: {
        primary: {
            main: '#18181B',
        },
        secondary: {
            main: green[500],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Grid sx={styles.container}>
                    <NavBar />
                    <ScrollTop />
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
