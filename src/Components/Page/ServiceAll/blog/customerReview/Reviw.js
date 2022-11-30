import React from 'react';
import { useForm } from 'react-hook-form';

const Reviw = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://laptop-shop.onrender.com/blogReview`;
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

            <div>



                <div className='bg-base-300 rounded lg:m-20 p-5'>
                    <form className='m-5 d-flex mx-auto flex-column w-50' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter product Name' className='mt-3 w-full rounded bg-base-200 p-3' required {...register("name",)} />
                        <textarea maxlength="350" placeholder='Write you comment 200 curecter-' className='mt-3 w-full rounded bg-base-200 p-3' required {...register("description")} />

                        <input type="submit" className='btn btn-primary' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Reviw;