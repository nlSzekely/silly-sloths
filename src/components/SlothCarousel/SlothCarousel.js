import React, {useRef, useState} from 'react';
import {Navigation, Pagination,Autoplay} from 'swiper';
import { Grid } from '@mui/material';

import Body_Normal from '../../assets/carousel/body/Normal.png';
import Body_Gold from '../../assets/carousel/body/Gold.png';
import Body_Leopard from '../../assets/carousel/body/Leopard.png';
import Body_Silver from '../../assets/carousel/body/Silver.png';
import Body_White from '../../assets/carousel/body/White.png';
import Body_Zombie from '../../assets/carousel/body/Zombie.png';
import Body_Black from '../../assets/carousel/body/Black.png';
import Body_Blue from '../../assets/carousel/body/Blue.png';
import Body_Bronze from '../../assets/carousel/body/Bronze.png';
import Body_Rainbow from '../../assets/carousel/body/Rainbow.png';
import Body_Red from '../../assets/carousel/body/Red.png';

import army_beret from '../../assets/carousel/hats/army_beret.png';
import army_helmet from '../../assets/carousel/hats/army_helmet.png';
import army_hat from '../../assets/carousel/hats/army_hat.png';
import asian_hat from '../../assets/carousel/hats/asian_hat.png';
import blue_hat from '../../assets/carousel/hats/blue_hat.png';


// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const hatData = [
  {
    id: '1',
    hatImg: army_beret,
},
{
    id: '2',
    hatImg: army_helmet,
},
{
    id: '3',
    hatImg: army_hat,
},
{
    id: '4',
    hatImg: asian_hat,
},
{
    id: '5',
    hatImg: blue_hat,
},
]

const bodyData = [
    {
        id: '1',
        bodyImg: Body_Normal,
    },
    {
        id: '2',
        bodyImg: Body_Gold,
    },
    {
        id: '3',
        bodyImg: Body_Leopard,
    },
    {
        id: '4',
        bodyImg: Body_Silver,
    },
    {
        id: '5',
        bodyImg: Body_White,
    },
];

export default function App() {
    return (
        <>  

             <Swiper 
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              style={{
               position:"absolute",
               top:-58,
               left: 0,
               zIndex:100,
               height: "150px",

              }}
             
            >
                {hatData.map((data) => (
                    <SwiperSlide style={{zIndex:99}} key={data.id}>
                        <div>
                            <img style={styles.body} src={data.hatImg} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper 
              slidesPerView={1}
              loop={true}
              pagination={{
                clickable: true,
              }}
              // navigation={true}
              modules={[Pagination, Navigation,Autoplay]}
              className="mySwiper"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
                {bodyData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div>
                            <img style={styles.body} src={data.bodyImg} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

const styles = {
    body: {
        width: '300px',
    },
};
