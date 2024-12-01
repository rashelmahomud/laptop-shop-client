import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomerReview from "./CustomerReview";
import Loading from "../../Shared/Loading/Loading";
import PrimaryAxios from "../../Api/Primary";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
      const reviewFetching = async() => {
        try{
          const res = await PrimaryAxios.get('/review')
          setReviews(res.data)
        }catch(error){
          throw error.message('review fetching error !')
        }
      }
      reviewFetching()

  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center font-bold lg:text-4xl  text-2xl text-primary">
        Our Happy Customer {reviews.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 p-10 gap-10">
        {reviews.slice(-6).map((review) => (
          <CustomerReview key={review._id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
