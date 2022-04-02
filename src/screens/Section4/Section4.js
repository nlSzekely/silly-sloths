import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Expand from '../../components/Expand/Expand';

const data = [
    {
        id: '1',
        title: 'What is the Silly Sloth Club?',
        description:
            'It is a collection of 10,000 unique Silly Sloth NFT-s, digital collectibles on the Cardano blockchain.',
    },
    {
        id: '2',
        title: 'Why the Cardano blockchain?',
        description:
            'Cardano is a proof of stake blockchain platform and it provides unparallel security to dApps. Cardano is the most environmentally friendly blockchain protocol on a global scale without compromising security. Cardano marketplace value has been ever-rising and it is called to be one of the Ethereum killers.',
    },
    {
        id: '3',
        title: 'How can I get a Silly Sloth?',
        description:
            'You can buy it directly from our site, or you can visit our page at the CNFT or the jpg.store marketplace.',
    },
    {
        id: '4',
        title: 'What wallet can I use?',
        description:
            'Cardano wallets are accepted, only use Yoroi/Daedalus/Nami/Adalite wallets. If you send your ADA direcly from a Centralized exchange (CEX) like Binance, Coinbase, Kucoin, your ADA will be lost!!',
    },
    {
        id: '5',
        title: 'What I get for my ADA?',
        description:
            'You will get two .png file in 8000x8000 resolution, one with background and one without it, in case if you want to put it on something. (T-shirt, cup, on your site, etc.) And if you are super lucky you also get a .gif file, where the Sloths become alive. Only 100 of these exist but no one knows witch particular NFT holds these subfiles.',
    },
    {
        id: '6',
        title: 'What about the commercial rights?',
        description: 'Full commercial rights and intellectual properties are given to the buyer.',
    },
];

export default function Section4() {
    return (
        <Grid mb={'80px'} container sx={{padding: 3, marginTop: '40px'}} lg={10} xs={12} justifyContent='center'>
            <Typography mb={'40px'} color='white' variant='h3' component='h3' fontWeight='bold'>
                FAQ
            </Typography>
            {data.map((item) => (
                <Expand key={item.id} title={item.title} description={item.description} />
            ))}
        </Grid>
    );
}

const styles = {
    contentContainer: {
        padding: {
            lg: '0 50px',
            xs: '0 10px',
        },
    },
};
