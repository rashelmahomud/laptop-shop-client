import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogsDetails = () => {

    const { blogId } = useParams();
    const [blog, setBlog] = useState([]);


    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDay();
    const month = today.getMonth();
    const time = today.getMinutes();

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
                <div className='my-10 grid lg:grid-cols-2 grid-cols-1 '>

                    <div className='font-bold'>
                        <span className='text-2xl'>Md Rashel</span><br />
                        <span>{day}-{month}-{year} ,{time} min read</span>
                    </div>

                    <div className='flex gap-5 p-2 mx-auto text-2xl'>

                        <a href='https://www.linkedin.com/in/rashelmahomud/'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://web.facebook.com/rashelmahomud.raj'><i class="fa-brands fa-square-facebook"></i></a>
                        <Link to='/'><i class="fa-solid fa-link"></i></Link>


                    </div>

                </div>

                <p className='font-bold my-3'>{newblog[0]?.description}</p>
                <span className='text-3xl font-bold'>Description</span>
                <p className='font-bold my-3 font-serif'>{newblog[0]?.dec}</p>
                <span className='text-3xl font-bold font-serif'>Largest Chain of Computer Store in Bangladesh</span>
                <p className='font-bold my-3'>{newblog[0]?.dec1}</p>

            </div>

        </div>
    );
};

export default BlogsDetails;