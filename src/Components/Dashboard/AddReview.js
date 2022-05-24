import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/review`;
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
    };
    return (
        <div>
            <h1 className='font-bold text-2xl'>Add Your Review..</h1>


            <div className='border lg:m-20 p-5'>
                <form className='m-5 d-flex mx-auto flex-column w-50' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter Your Name' className='mt-3 w-full border p-3' {...register("Name",)} />
                    <input placeholder='Enter Your Email' className='mt-3 w-full border p-3' {...register("Email",)} />

                    <textarea placeholder='Writen your text-' className='mt-3 w-full border p-3' {...register("dec")} />
                    <input placeholder='Img URL' className='mt-3 w-full border p-3 mb-3' type="text" {...register("img")} />
                    <input type="submit" className='btn' />
                </form>
            </div>

        </div>
    );
};

export default AddReview;