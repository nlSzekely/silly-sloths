import React, {useRef, useState} from 'react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import {Grid} from '@mui/material';

import body_1 from '../../assets/carousel/body/1.png';
import body_2 from '../../assets/carousel/body/2.png';
import body_3 from '../../assets/carousel/body/3.png';
import body_4 from '../../assets/carousel/body/4.png';
import body_5 from '../../assets/carousel/body/5.png';
import body_6 from '../../assets/carousel/body/6.png';

import hat_1 from '../../assets/carousel/hat/1.png';
import hat_2 from '../../assets/carousel/hat/2.png';
import hat_3 from '../../assets/carousel/hat/3.png';
import hat_4 from '../../assets/carousel/hat/4.png';
import hat_5 from '../../assets/carousel/hat/5.png';
import hat_6 from '../../assets/carousel/hat/6.png';

import sunglass_1 from '../../assets/carousel/sunglass/1.png';
import sunglass_2 from '../../assets/carousel/sunglass/2.png';
import sunglass_3 from '../../assets/carousel/sunglass/3.png';
import sunglass_4 from '../../assets/carousel/sunglass/4.png';
import sunglass_5 from '../../assets/carousel/sunglass/5.png';
import sunglass_6 from '../../assets/carousel/sunglass/6.png';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';

const hatData = [
    {
        id: '1',
        hatImg: hat_1,
    },
    {
        id: '2',
        hatImg: hat_2,
    },
    {
        id: '3',
        hatImg: hat_3,
    },
    {
        id: '4',
        hatImg: hat_4,
    },
    {
        id: '5',
        hatImg: hat_5,
    },
    {
        id: '6',
        hatImg: hat_6,
    },
];

const bodyData = [
    {
        id: '1',
        bodyImg: body_1,
    },
    {
        id: '2',
        bodyImg: body_2,
    },
    {
        id: '3',
        bodyImg: body_3,
    },
    {
        id: '4',
        bodyImg: body_4,
    },
    {
        id: '5',
        bodyImg: body_5,
    },
    {
        id: '6',
        bodyImg: body_6,
    },
];
const sunglassData = [
    {
        id: '1',
        sunglassImg: sunglass_1,
    },
    {
        id: '2',
        sunglassImg: sunglass_2,
    },
    {
        id: '3',
        sunglassImg: sunglass_3,
    },
    {
        id: '4',
        sunglassImg: sunglass_4,
    },
    {
        id: '5',
        sunglassImg: sunglass_5,
    },
    {
        id: '6',
        sunglassImg: sunglass_6,
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
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 101,
                    top:26
                }}
            >
                {hatData.map((data) => (
                    <SwiperSlide style={{zIndex: 99}} key={data.id}>
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
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 100,
                    top:100
                }}
            >
                {sunglassData.map((data) => (
                    <SwiperSlide style={{zIndex: 99}} key={data.id}>
                        <div>
                            <img style={styles.body} src={data.sunglassImg} />
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
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
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
