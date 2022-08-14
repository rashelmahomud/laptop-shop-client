import React from 'react';

const BestSell = ({ service }) => {
    return (
        <div className='rounded p-10 grid justify-items-center bg-base-200'>

            <img style={{ width: 200 }} src={service.img} alt="Shoes" className="rounded-xl text-center" />

            <h1 className='mt-10 text-center font-bold text-2xl'>{service.name}</h1>

        </div>
    );
};

export default BestSell;