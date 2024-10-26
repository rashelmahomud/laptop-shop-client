import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const OrderModal = ({ orders, setOrders }) => {
  const { _id, name, sublierName, cost, Quantity } = orders;
  const [user, loading, error] = useAuthState(auth);

  const handelBooking = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const number = event.target.number.value;
    const name = event.target.name.value;
    console.log("hello dear name", email, number, name);

    const order = {
      userId: _id,
      orderName: name,
      cost,
      userEmail: user.email,
      // userName: user.displayName,
      number: event.target.number.value,
    };

    fetch("https://laptop-shop-sarver.onrender.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("added ordsers", data);

        if (data) {
          toast.success("added your orders");
        }

        //close for modal
        setOrders(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-secondary">Choos This: {name}</h3>
          <p class="py-4 text-primary">{sublierName}</p>

          <form onSubmit={handelBooking} className="grid justify-items-center">
            <input
              type="text"
              name="name"
              disabled
              value={name}
              class="input input-bordered w-full max-w-xs m-3"
            />
            <input
              type="text"
              value={cost}
              class="input input-bordered w-full max-w-xs m-3"
            />
            <input
              type="text"
              value={Quantity}
              class="input input-bordered w-full max-w-xs m-3"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              placeholder="Email"
              class="input input-bordered w-full max-w-xs m-3"
            />
            <input
              type="Number"
              name="number"
              placeholder="phone"
              class="input input-bordered w-full max-w-xs m-3"
            />
            <input
              type="submit"
              value="submit"
              class="input input-bordered w-full max-w-xs text-center btn btn-primary m-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
