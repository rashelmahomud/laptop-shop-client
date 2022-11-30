import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../firebase.init';
import girl from '../../../../../assects/girl.png'
const Show = ({ d }) => {
    const [user] = useAuthState(auth);
    return (
        <div className='my-10'>
            <div className='flex gap-5'>
                {
                    user ? <img className='rounded-full w-8' src={user?.photoURL} alt="" /> : <img className='rounded-full w-12' src={girl} alt="" />
                }

                <p className='font-bold'>{d.name}</p>
            </div>
            <p>{d.dec}</p>
            <p>{d.description}</p>
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
    );
};

export default Show;