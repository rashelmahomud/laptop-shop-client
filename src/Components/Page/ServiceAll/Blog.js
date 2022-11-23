import React from 'react';
import './blogs.css'
const Blog = ({ blog }) => {

    const { name, title, img } = blog;
    return (
        <div className='mx-auto relative container'>

            <img className='image' src={img} alt='img' />


            <div className='flex middle text-2xl absolute bottom-10 left-5 z-10 hover:text-red-300'>
                <div className='rounded-full'>
                    <i class="fa-solid fa-heart text-red-600"></i>
                    <p>CLICK</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;