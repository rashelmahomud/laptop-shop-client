import React from 'react';
import countries from '../../assects/image/11.png';
import project from '../../assects/image/22.png';
import clients from '../../assects/image/33.png';
import feedback from '../../assects/image/44.png';
import Review from './Review';

const Reviews = () => {

    const reviews = [
        {
            _id: 1,
            img: countries,
            count: 88,
            name: 'All Services Countrys',
        },
        {
            _id: 2,
            img: project,
            count: 766,
            name: 'Top Project',
        },
        {
            _id: 3,
            img: clients,
            count: 576,
            name: 'Clients Happyness',
        },
        {
            _id: 4,
            img: feedback,
            count: 1658,
            name: 'Customer Feedback',
        }
    ];


    return (
        <div>

            <h1 className="text-5xl font-bold text-center mt-20">Our Business History</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-20'>

                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }


            </div>
        </div>
    );
};

export default Reviews;