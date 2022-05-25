import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `https://polar-spire-39773.herokuapp.com/service`;
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
            <h1 className='text-2xl font-bold'>Add Products</h1>

            <div>



                <div className='border lg:m-20 p-5'>
                    <form className='m-5 d-flex mx-auto flex-column w-50' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Enter product Name' className='mt-3 w-full border p-3' {...register("name",)} />
                        <input placeholder='Your Name' className='mt-3 w-full border p-3' {...register("sublierName",)} />
                        <input placeholder='Price..' className='mt-3 w-full border p-3' {...register("cost",)} />
                        <input placeholder='Quentity' className='mt-3 w-full border p-3' {...register("Quantity",)} />

                        <textarea placeholder='Writen your text-' className='mt-3 w-full border p-3' {...register("description")} />
                        <input placeholder='Img URL' className='mt-3 w-full border p-3 mb-3' type="text" {...register("img")} />
                        <input type="submit" className='btn' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;