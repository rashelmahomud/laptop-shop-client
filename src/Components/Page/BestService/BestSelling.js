

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import coll from '../../../assects/image/1 (1).jpg';
import adapter from '../../../assects/image/1 (2).jpg';
import book from '../../../assects/image/1 (3).jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./best.css";

// import required modules
import { Pagination } from "swiper";
import BestSell from './BestSell';

const BestSelling = () => {

    const servces = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            img: coll,
            dec: 'Flouride Treatment is very nice and excelent any very easyly work our and respect'
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: adapter,
            dec: 'Flouride Treatment is very nice and excelent any very easyly work our and respect'
        },
        {
            _id: 3,
            name: 'Key Features',
            img: book,
            dec: 'Western Digital My Book 4TB External Hard Drive'
        },
        {
            _id: 4,
            name: 'Key Features',
            img: book,
            dec: 'Western Digital My Book 4TB External Hard Drive'
        },
        {
            _id: 5,
            name: 'Key Headphone',
            img: adapter,
            dec: 'Western Digital My Book 4TB External Hard Drive'
        }
    ];
    return (
        <div>

            <div>
                <h1 className='text-4xl text-center my-20'>Best Selling Product</h1>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 lg:mx-24 gap-12 '>
                    {
                        servces.map(service => <SwiperSlide key={service._id}>
                            <BestSell  service={service} ></BestSell>
                        </SwiperSlide>)
                    }
                </div>


            </Swiper>





        </div>
    );
};

export default BestSelling;