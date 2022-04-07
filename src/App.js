import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {initializeApp} from 'firebase/app';
import React, {useEffect} from 'react';
import {green, purple} from '@mui/material/colors';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import {collection, query, getDocs, where} from 'firebase/firestore';
import NavBar from './components/HideAppBar/HideAppBar';
import ScrollTop from './components/ScrollToTop/ScrollToTop';
import Section1 from './screens/Section1/Section1';
import Section2 from './screens/Section2/Section2';
import Section3 from './screens/Section3/Section3';
import Section4 from './screens/Section4/Section4';
import Footer from './components/Footer/Footer';
import Search from './screens/Search/Search';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAmB2wyZ3tbJDloGzEi-gwdUiIkNpjVrX0',
    authDomain: 'sillyslothclub-857b2.firebaseapp.com',
    databaseURL: 'https://sillyslothclub-857b2-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'sillyslothclub-857b2',
    storageBucket: 'sillyslothclub-857b2.appspot.com',
    messagingSenderId: '218793570529',
    appId: '1:218793570529:web:e2ffdf3009bd525faf87a0',
    measurementId: 'G-D24ZT79DDD',
};

initializeApp(firebaseConfig);

// Initialize Firebase
const db = getFirestore();

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

const NotFound = () => {
    return <div>not found</div>;
};

const MainPage = () => {
    useEffect(async() => {

        const conditions = [where("mouth", "==", "Calm"), where("body", "==", "Gold" )];
        const q = query(collection(db, 'sloths'),...conditions);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
    }, []);

    return (
        <Grid sx={styles.container}>
            <ScrollTop />
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
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
        backgroundColor: '#1a1e26',
    },
};

export default App;
