import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handelDeleteOrder = (id) => {
    const proceed = window.confirm("Are You Sure For Delete Order?");
    if (proceed) {
      // console.log("hello",id);
      fetch(`https://laptop-shop-sarver.onrender.com/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('hello delete', data);
          if (data.deletedCount > 0) {
            window.location.reload();
          }
        });
    }
  };

  const handelPayment = (id) => {
    console.log("payment", id);
  };

  useEffect(() => {
    if (user) {
      fetch(
        `https://laptop-shop-sarver.onrender.com/order?userEmail=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          // console.log('res',res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");

            navigate("/");
          }

          return res.json();
        })
        .then((data) => {
          setMyOrder(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold my-10">My Orders {myOrder.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Prise</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.orderName}</td>
                <td>{order.cost}</td>
                <td>{user.email}</td>
                <td>{order.number}</td>
                <td>
                  {order.cost && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button class="btn btn-xs font-bold bg-green-600">
                        Pay
                      </button>
                    </Link>
                  )}
                  {order.cost && order.paid && (
                    <span class="btn btn-xs font-bold bg-gray-600">paid</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handelDeleteOrder(order._id)}
                    class="btn btn-xs font-bold bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
