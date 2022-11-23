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
        <div className='text-center'>
            <p>{newblog[0]?.name}</p>
            <img src={newblog[0]?.img} alt='' />

        </div>
    );
};

export default BlogsDetails;