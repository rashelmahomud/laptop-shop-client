import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useServiceDetails from "../hook/useServiceDetails";
import OrderModal from "./OrderModal";

const Details = () => {
  const { servicesId } = useParams();
  const [quantity, setQuantity] = useState({});
  const [orders, setOrders] = useState(null);
  const [service, setService] = useServiceDetails(servicesId);

  const { register, handleSubmit } = useForm();
  const handelDelivery = () => {
    console.log("hello dear delivery");
  };

  const updateQuantity = (e) => {
    console.log(e);
    e.preventDefault();
    const Quantity = e.target.quantity.value;
    if (!Quantity || Quantity < 0) {
      return;
    }

    fetch(`https://laptop-parts-sarver.vercel.app/service/${servicesId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ Quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        window.alert("quantity added");
        window.location.reload();

        e.target.reset();
      });
  };

  return (
    <div className="border lg:px-40 lg:py-5">
      <div className="card bg-base-200 shadow-xl justify-content-center lg:p-5">
        <figure>
          <img
            className="rounded"
            style={{ width: 400 }}
            src={service.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-bold">{service.name}</h2>
          <p className="text-gray-500">{service.description}</p>
          <p className="font-bold">{service.cost}</p>
          <p className="font-bold">Total Quentity {service.TotalQuentity}</p>
          <p className="font-bold">Quentity {service.Quantity}</p>
          <div className="card-actions justify-center">
            <label
              onClick={() => setOrders(service)}
              for="my-modal-3"
              className="btn modal-button btn btn-outline btn-primary"
            >
              Order Now
            </label>
          </div>
        </div>

        <div className="my-10 text-center">
          <form onSubmit={updateQuantity}>
            <input
              type="number"
              placeholder="Quentity ADD"
              className="input w-full max-w-xs bg-base-300"
              name="quantity"
            />
            <input
              className="btn btn-outline btn-primary"
              type="submit"
              value="Add Quantity"
            />
          </form>
        </div>
      </div>

      {orders && (
        <OrderModal setOrders={setOrders} orders={orders}></OrderModal>
      )}
    </div>
  );
};

export default Details;
