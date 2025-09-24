import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`https://laptop-parts-sarver.vercel.app/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make a admin for All Access!");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
          {
            role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-primary text-white">
            Make Admin
          </button> : <button className="btn bg-green-500 text-white">
            Admin
          </button>
          }

      </td>
      <td>
        <button className="btn bg-red-700 text-white">Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
