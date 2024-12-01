import React from "react";
import { useForm } from "react-hook-form";
import PrimaryAxios from "../Api/Primary";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      try {
        const response = await PrimaryAxios.post("/review", data);
        window.alert("Product added successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Error adding product:", error);
        window.alert("Failed to add the product. Please try again.");
      }


  };
  return (
    <div>
      <h1 className="font-bold text-2xl my-10">Add Your Review..</h1>

      <div className="bg-base-200 rounded lg:m-20 p-5">
        <form
          className="m-5 d-flex mx-auto flex-column w-50"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Enter Your Name"
            className="mt-3 w-full p-3 bg-base-300 rounded"
            {...register("Name")}
          />
          <input
            placeholder="Enter Your Email"
            className="mt-3 w-full bg-base-300 rounded p-3"
            {...register("Email")}
          />

          <textarea
            placeholder="Writen your text-"
            className="mt-3 w-full bg-base-300 rounded p-3"
            {...register("dec")}
          />
          <input
            placeholder="Img URL"
            className="mt-3 w-full bg-base-300 rounded p-3 mb-3"
            type="text"
            {...register("img")}
          />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
