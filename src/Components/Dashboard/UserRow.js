import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('amake admin', data);
            })
    }

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} className='btn btn-primary text-white'>Make Admin</button></td>
            <td><button className='btn bg-red-600'>Delete</button></td>
        </tr>

    );
};

export default UserRow;