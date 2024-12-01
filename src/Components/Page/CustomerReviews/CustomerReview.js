import React from 'react';
const CustomerReview = ({ review }) => {
    const { img, Name, Email, dec } = review;
 
        return (
            <div className='flex mx-10 gap-10'>
                <div>
                    <div className="avatar" data-aos="zoom-in-right"
                        data-aos-duration="3000">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                </div>
                <div>
                    <h2 className='text-2xl font-bold'>{Name}</h2>
                    <p className='font-bold'>{Email}</p>
                    <p className='text-justify'>{dec}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>

            </div>
        );
    };

    export default CustomerReview;