import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogsDetails = () => {

    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    const newblog = blog.filter(s => s._id == blogId)



    return (
        <div className='text-center lg:mx-20'>
            <img className='mx-auto h-96 lg:w-4/5 p-5' src={newblog[0]?.img} alt='' />

            <div className='text-left lg:mx-32 p-5'>
                <p className='font-bold text-3xl'>{newblog[0]?.title}</p>
                <p className='font-bold my-3'>{newblog[0]?.description}</p>
                <span className='text-3xl font-bold'>Description</span>
                <p className='font-bold my-3'>{newblog[0]?.dec}</p>
                <span className='text-3xl font-bold'>Largest Chain of Computer Store in Bangladesh</span>
                <p className='font-bold my-3'>{newblog[0]?.dec1}</p>

            </div>

        </div>
    );
};

export default BlogsDetails;