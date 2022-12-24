import React from 'react';
const CustomerReview = ({ review }) => {
    const { img, Name, Email, dec } = review;
 
        return (
            <div className='flex mx-10 gap-10'>
                <div>
                    <div class="avatar" data-aos="zoom-in-right"
                        data-aos-duration="3000">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{Name}</h2>
                    <p className='font-bold'>{Email}</p>
                    <p>{dec}</p>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>

            </div>
        );
    };

    export default CustomerReview;