import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
const Show = ({ d }) => {
    const [user] = useAuthState(auth);
    return (
        <div className='my-10'>
            <div className='flex gap-5'>
                <p className="flex h-screen justify-center items-center w-8 h-8 bg-gray-100 rounded-full">
                    {
                        user ? <i className="fa-solid fa-user"></i> : <i className="fa-solid fa-user"></i>
                    }
                </p>

                <p className='font-bold'>{d.name}</p>
            </div>
            <p>{d.dec}</p>
            <p>{d.description}</p>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default Show;