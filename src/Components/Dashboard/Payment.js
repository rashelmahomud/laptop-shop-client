import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gQEDIV23r720zVb2664zCzLs7pDsomY6RCPFitr0nePAQjCZf6YHaWIaNwIZ7jJN5DJhS0cYJcqkPriJQgNnr002JDW73GU"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://laptop-parts-sarver.vercel.app/order/${id}`;
  const { data: payBill, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-300 shadow-xl justify-center">
          <div className="card-body">
            <h1>hello{id}</h1>
            <h3>
              Hey.. :{" "}
              <span className="text-secondary font-bold uppercase">
                {payBill.orderName}
              </span>
            </h3>
            <h2 className="card-title">{payBill.userEmail}</h2>
            <h2 className="card-title">Contact : {payBill.number}</h2>
            <p>Total price: ${payBill.cost}</p>
          </div>
        </div>
        <div className="card w-96 bg-base-300 shadow-xl mt-5">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm payBill={payBill} isLoading={isLoading} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
