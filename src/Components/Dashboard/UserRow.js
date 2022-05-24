import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index,refetch }) => {
    const { email,role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success('successfully Make a Admin');
            })
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-primary text-white'>Make Admin</button>}</td>
            <td><button className='btn bg-red-600'>Delete</button></td>
        </tr>

    );
};

export default UserRow;