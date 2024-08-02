import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './PhotoPresenter.css';
import { IonItem } from '@ionic/react';

const PhotoPresenter: React.FC = () => {
    return (
        <IonItem>
            <Swiper className='swiper-custom'
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                direction='horizontal'
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <h1>Fisioterapia</h1>
                    <img
                        src='assets/img/fisioterapia-1.svg'
                        alt='Tratamientos'
                        style={{ width: '45%', height: '45%', margin: '0 auto', display: 'block', padding: '5px' }}
                    />
                    <h2></h2>
                </SwiperSlide>
                {Array.from({ length: 2 }, (_, index) => (
                    <SwiperSlide key={index}>
                        <h1>Masajes Reductores</h1>
                        <img
                            src={`assets/img/reductores-${String(index + 1)}.svg`}
                            alt={`Image ${index + 1}`}
                            style={{ width: '45%' , height: '45%', margin: '0 auto', display: 'block' , padding: '5px'}}
                        />
                        <h2></h2>
                    </SwiperSlide>
                ))}
            </Swiper>
        </IonItem>
    );
};

export default PhotoPresenter;