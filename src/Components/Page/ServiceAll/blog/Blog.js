import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './blogs.css'
const Blog = ({ blog }) => {

    const { img, _id } = blog;

    const navigate = useNavigate();

    const handelDetails = (id) => {
        navigate(`/detailsblogs/${id}`)
    }


    return (
        <div onClick={ () => handelDetails(_id)} className='mx-auto relative container'>

         
                <img className='image' src={img} alt='img' />

                <div className='flex middle text-2xl absolute bottom-10 left-5 z-10 hover:text-red-300'>
                    <div className='rounded-full'>
                        <i className="fa-solid fa-heart text-red-600"></i>
                        <p className='font-bold'>CLICK</p>
                    </div>
                </div>
          
        </div>
    );
};

export default Blog;