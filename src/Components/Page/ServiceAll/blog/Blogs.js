import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import PrimaryAxios from "../../../Api/Primary";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    const fetchBlogs = async () => {
      try{
        const res = await PrimaryAxios.get('/blogs')
      return setBlogs(res.data)
      }catch(error){
        throw error.message('blogs fetching error')
      }
    }

      fetchBlogs()
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">BLOGS</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 lg:p-10 mx-5 lg:mx-20">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
