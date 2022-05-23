import React, { useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = ({ order }) => {
    const [user] = useAuthState(auth);

    return (
        <div>

            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <h2 className='font-bold text-2xl'>Profile</h2>
                                </label>

                            </div>
                            <div>
                                <div className=' p-20'>
                                    <div class="avatar">
                                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src="https://api.lorem.space/image/face?hash=3174" />
                                        </div>
                                    </div>

                                    <h1 className='text-2xl font-bold'>Name: {user.displayName}</h1>
                                </div>
                                <h1><span className='font-bold'>Email:</span> {user.email}</h1>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;