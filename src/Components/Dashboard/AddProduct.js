import React from "react";
import { useForm } from "react-hook-form";
import PrimaryAxios from "../Api/Primary";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      try {
        const response = await PrimaryAxios.post("/service", data);
        window.alert("Product added successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Error adding product:", error);
        window.alert("Failed to add the product. Please try again.");
      }

  };
  return (
    <div>
      <h1 className="text-2xl font-bold my-10">Add Products</h1>

      <div>
        <div className="bg-base-300 rounded lg:m-20 p-5">
          <form
            className="m-5 d-flex mx-auto flex-column w-50"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Enter product Name"
              className="mt-3 w-full rounded bg-base-200 p-3"
              {...register("name")}
            />
            <input
              placeholder="Your Name"
              className="mt-3 w-full rounded bg-base-200 p-3"
              {...register("sublierName")}
            />
            <input
              placeholder="Price.."
              className="mt-3 w-full rounded bg-base-200 p-3"
              {...register("cost")}
            />
            <input
              placeholder="Quentity"
              className="mt-3 w-full rounded bg-base-200 p-3"
              {...register("Quantity")}
            />

            <textarea
              placeholder="Writen your text-"
              className="mt-3 w-full rounded bg-base-200 p-3"
              {...register("description")}
            />
            <input
              placeholder="Img URL"
              className="mt-3 w-full rounded bg-base-200 p-3 mb-3"
              type="text"
              {...register("img")}
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
