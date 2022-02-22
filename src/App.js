import {createTheme} from '@mui/material/styles';
import {green, purple} from '@mui/material/colors';
import {ThemeProvider, CssBaseline} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HideAppBar from './components/HideAppBar/HideAppBar';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

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
                <Grid  sx={styles.container}>
                    <HideAppBar />
                    {[...new Array(999)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                        )
                        .join('\n')}
                </Grid>
            </CssBaseline>
        </ThemeProvider>
    );
}

const styles = {
    container: {
        backgroundColor: 'primary.main',
        minHeight: '100vh',
        width:"100%"
    },
};

export default App;
