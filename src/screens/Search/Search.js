import React, {useEffect, useState} from 'react';
import NavBar from '../../components/HideAppBar/HideAppBar';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';
import logo from '../../assets/logo-white.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {DiscordIcon} from '../../components/Icons/Icons';
import ResponsiveDrawer from '../../components/ResponsiveDrawer/ResponsiveDraver';
import {collection, query, getDocs, where} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
import {Grid, Box, Typography, IconButton} from '@mui/material';
import SearchBar from '../../components/Search/SearchBar';
import SlothCard from '../../components/SlothCard/SlothCard';

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
const db = getFirestore();

export default function Search() {
    const [data, setData] = useState([]);
    useEffect(async () => {
        const fireStoreData = []
        // const conditions = [where('Mouth', '==', 'Calm'), where('Body', '==', 'Gold')];
        const conditions = [];

        const q = query(collection(db, 'sloths'), ...conditions);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, ' => ', doc.data());
            fireStoreData.push(doc.data());
        });
        setData(fireStoreData)
    }, []);

    useEffect(()=>{
        console.log("🚀 ~ file: Search.js ~ line 52 ~ Search ~ data", data)

    },[data])

    return (
        <div style={styles.container}>
            <ResponsiveDrawer header={<Header />}>
                <Grid container>
                    {/* <SearchBar/> */}
                    <Grid item container>
                        <Grid item container justifyContent='center'>
                            {data.map((item) => (
                                <SlothCard sloth={item} />
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </ResponsiveDrawer>
        </div>
    );
}

const Header = () => {
    return (
        <Grid container justifyContent={'space-between'} py={1} px={2}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img style={{maxWidth: 50, display: 'inline-block'}} src={logo} alt='logo' />
                <Typography
                    component={'p'}
                    variant='p'
                    sx={{display: {xs: 'none', md: 'inline-block'}}}
                    fontSize={'18px'}
                    fontWeight='bold'
                    ml={2}
                >
                    Silly Sloth Club
                </Typography>
            </div>
            <Grid item sx={{color: 'white'}}>
                <IconButton target='_blank' href='https://twitter.com/sillyslothklub' size='large' color='inherit'>
                    <TwitterIcon color='#fffff' />
                </IconButton>

                <IconButton
                    target='_blank'
                    href='https://www.instagram.com/sillysloth_club/'
                    size='large'
                    color='inherit'
                >
                    <InstagramIcon />
                </IconButton>

                <IconButton
                    href='https://www.facebook.com/Silly-Sloth-Club-100329609322351/'
                    size='large'
                    color='inherit'
                    target='_blank'
                >
                    <FacebookIcon />
                </IconButton>

                <IconButton
                    target='_blank'
                    href='https://discord.gg/H6zkydZMZA'
                    sx={{marginLeft: '-5px'}}
                    size='large'
                    color='inherit'
                >
                    <DiscordIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

const styles = {
    container: {
        background: 'rgb(24,28,36)',
        background: 'linear-gradient(0deg, rgba(22,24,29,1)  0%, rgba(24,28,36,1) 100%)',
        minHeight: '100vh',
    },
};

// Array.from(Array(10).keys())
