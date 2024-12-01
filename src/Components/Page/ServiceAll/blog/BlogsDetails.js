import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../../../firebase.init";
import ReviewShow from "./customerReview/ReviewShow";
import Reviw from "./customerReview/Reviw";
import PrimaryAxios from "../../../Api/Primary";

const BlogsDetails = () => {
  const [user, loading, error] = useAuthState(auth);

  const { blogId } = useParams();
  const [blog, setBlog] = useState([]);
  const [name, setName] = useState(null);
  const [text, setText] = useState(null);

  const today = new Date();
  const year = today.getFullYear();
  const day = today.getDay();
  const month = today.getMonth();
  const time = today.getMinutes();

  useEffect(() => {
      const fetchBlogsDetails = async () => {
        try{
        const res = await PrimaryAxios.get('/blogs')
        setBlog(res.data)
        }catch(error){
          throw error.message('blogs details error fetching')
        }
      }
      fetchBlogsDetails()
  }, []);

  const newblog = blog.filter((s) => s._id === blogId);

  // const handelSubmite = (e) => {
  //     e.preventDefault();
  //     setName(e.target.text.value);
  //     setText(e.target.textarea.value);
  // }

  return (
    <div className=" lg:mx-20">
      <img
        className="mx-auto lg:h-96 lg:w-4/5 p-5"
        src={newblog[0]?.img}
        alt=""
      />

      <div className="text-left lg:mx-32 p-5">
        <p className="font-bold text-3xl">{newblog[0]?.title}</p>
        <div className="my-10 grid lg:grid-cols-2 grid-cols-1 ">
          <div className="font-bold">
            <span className="text-2xl">Md Rashel</span>
            <br />
            <span>
              {day}-{month}-{year} ,{time} min read
            </span>
          </div>

          <div className="flex gap-5 p-2 mx-auto text-2xl">
            <a href="https://www.linkedin.com/in/rashelmahomud/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://web.facebook.com/rashelmahomud.raj">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <Link to="/">
              <i className="fa-solid fa-link"></i>
            </Link>
          </div>
        </div>
        <p className="font-bold my-3">{newblog[0]?.description}</p>
        <span className="text-3xl font-bold text-gray-500">Description</span>
        <p className="font-bold my-3 font-serif text-gray-500">
          {newblog[0]?.dec}
        </p>
        <span className="text-3xl font-bold font-serif">
          Largest Chain of Computer Store in Bangladesh
        </span>
        <p className="font-bold my-3 text-gray-500">{newblog[0]?.dec1}</p>
      </div>
      <div>
        <h1 className="lg:mx-20 lg:px-20 font-bold text-2xl">REVIEW</h1>
        <div className="lg:mx-32 lg:p-20 p-5 text-gray-500">
          <ReviewShow />
        </div>

        <div className="lg:mx-24 lg:p-10 p-3">
          <Reviw />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
