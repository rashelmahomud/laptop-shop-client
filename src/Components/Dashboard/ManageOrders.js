import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PrimaryAxios from "../Api/Primary";
const ManageOrders = () => {
  const [myOrder, setMyOrder] = useState([]);


  useEffect(() => {
    const orderData = async () => {
      try {
        const res = await PrimaryAxios.get("orders");
        setMyOrder(res.data);
      } catch (error) {
        console.log('error order ', error)
      }
    };

    orderData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">All Orders Manageing here</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
                <td>{order.userEmail}</td>
                <td>{order.number}</td>
                <td>
                 
                      <button className="btn btn-xs font-bold bg-green-600">
                        Pay
                      </button>
                   
                  
                  {order.cost && order.paid && (
                    <span className="btn btn-xs font-bold bg-gray-600">
                      paid
                    </span>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs font-bold bg-red-600">
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

export default ManageOrders;
