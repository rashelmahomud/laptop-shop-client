import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: sentBill, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl justify-center">
                <div class="card-body">
                    <h3>Hey.. : <span className='text-secondary font-bold uppercase'>{sentBill.orderName}</span></h3>
                    <h2 class="card-title">{sentBill.userEmail}</h2>
                    <h2 class="card-title">Contact : {sentBill.number}</h2>
                    <p>Total price: ${sentBill.cost}</p>

                </div>

            </div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body">

                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm apoinment={apoinment} />
                    </Elements> */}

                </div>
            </div>
        </div>
    );
};

export default Payment;