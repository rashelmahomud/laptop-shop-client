import React from 'react';

const Review = ({ review }) => {

    const { img, count, name } = review;
    return (
        <div className='grid justify-items-center' >
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-6xl font-bold">{count}+</h2>
                    <p className='text-2xl font-bold'>{name}</p>

                </div>
            </div>

        </div>
    );
};

export default Review;