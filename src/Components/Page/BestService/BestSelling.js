import React from 'react';
import coll from '../../../assects/image/1 (1).jpg';
import adapter from '../../../assects/image/1 (2).jpg';
import book from '../../../assects/image/1 (3).jpg';
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
        }
    ];
    return (

        <div className='mx-15'>
            <h1 className='text-primary text-4xl font-bold text-center my-20'>Best Selling Phone</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 p-10'>

                {
                    servces.map(service => <BestSell key={service._id} service={service}></BestSell>)
                }
            </div>


        </div>
    );
};

export default BestSelling;