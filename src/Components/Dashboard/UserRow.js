import React from 'react';

const UserRow = ({user,index}) => {
    const {email} =user;

    return (
      
            <tr>
                <th>{index +1}</th>
                <td>{email}</td>
                <td><button className='btn btn-primary text-white'>Make Admin</button></td>
                <td><button className='btn bg-red-600'>Delete</button></td>
            </tr>
        
    );
};

export default UserRow;