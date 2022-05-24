import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [myOrder, setMyOrder] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })

                .then(res => {
                    // console.log('res',res);
                    if (res.status === 401 || res.status === 403){
                        signOut(auth);
                        localStorage.removeItem('accessToken');
    
                        navigate('/');
                    }

                   return res.json()
                })
                .then(data => {
                    setMyOrder(data);
                })
        }
    }, [user])

    return (
        <div>
            <h2 className='text-2xl font-bold'>My Orders {myOrder.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Prise</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.orderName}</td>
                                <td>{order.cost}</td>
                                <td>{user.email}</td>
                                <td>{order.number}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;