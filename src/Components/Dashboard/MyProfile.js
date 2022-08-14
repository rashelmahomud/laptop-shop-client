import { map } from '@firebase/util';
import React, { useEffect, useReducer, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = ({ order }) => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        fetch('https://polar-spire-39773.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, [])

    const onSubmit = data => {
        // console.log("hello", data);
        const url = `https://polar-spire-39773.herokuapp.com/profile`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                window.alert('successfully Review add');
                window.location.reload();

                // e.target.reset();
                console.log(data);

            })
    }

    return (
        <div>

            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card flex-shrink-0 lg:w-full md:w-full w-80  shadow-2xl bg-base-200">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <h2 className='font-bold text-2xl'>Profile</h2>
                                </label>

                            </div>
                            {
                                profiles.slice(-1).map(profile => <div>
                                    <div>

                                        <div class="avatar">
                                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={profile.img} />
                                            </div>
                                        </div>
                                        <h1 className='text-2xl font-bold '><span className='font-bold'></span> {user.displayName}</h1>
                                        <h1 className='text-2xl shadow my-3'><span className='font-bold'>Email:</span> {user.email}</h1>
                                        <h1 className='text-2xl shadow'><span className='font-bold my-2'>Education:</span> {profile.Name}</h1>
                                        <h1 className='text-2xl shadow my-3'><span className='font-bold my-4'>Contact:</span> {profile.Phone}</h1>
                                        <h1 className='text-2xl shadow my-3'><span className='font-bold my-2'>Information:</span> {profile.dec}</h1>
                                    </div>
                                </div>)
                            }
                         

                        </div>

                    </div>
                </div>
            </div>

            {/* import for code */}
            <div class="hero">
                <div class="hero-content">
                  

                    <div class="card  shadow-2xl bg-base-300">
                        <div class="card-body">
                            <div class="form-control">
                                <div className='rounded lg:m-20 p-5'>
                                <h3 className='text-3xl font-bold'>You Can Add Your Profile Here!</h3>
                                    <form className='m-5 d-flex mx-auto flex-column w-50' onSubmit={handleSubmit(onSubmit)}>
                                        <input placeholder='Present Educations..' className='mt-3 w-full rounded bg-base-200 p-3' {...register("Name",)} />
                                        <input placeholder='Phone Number' className='mt-3 w-full rounded bg-base-200 p-3' {...register("Phone",)} />

                                        <textarea placeholder='Writen your life line..-' className='mt-3 w-full rounded bg-base-200 p-3' {...register("dec")} />
                                        <input placeholder='Img URL' className='mt-3 w-full rounded bg-base-200 p-3 mb-3' type="text" {...register("img")} />
                                        <input type="submit" className='btn btn-primary' />
                                    </form>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyProfile;