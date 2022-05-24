import React, { useEffect, useState } from 'react';
import CustomerReview from './CustomerReview';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/review')
        .then(res =>res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-4xl text-secondary'>Our Happy Customer {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-10 gap-10'>

                {
                    reviews.map(review => <CustomerReview key={review._id} review={review}></CustomerReview>)
                }

            </div>
        </div>
    );
};

export default CustomerReviews;