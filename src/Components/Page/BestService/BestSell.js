import React from 'react';

const BestSell = ({ service }) => {

    const { name, img } = service;

    return (
        <div>

            <div className="card w-96  bg-base-300 shadow-xl p-5">
                <div className='flex'>
                    <figure className="px-10 ">
                        <img src={img} alt="Shoes" className="rounded-xl rounded-full mx-3 " />

                    </figure>

                </div>
                <div className="card-body">

                    <p className='text-left'>{name}</p>

                </div>

            </div>


        </div>
    );
};

export default BestSell;