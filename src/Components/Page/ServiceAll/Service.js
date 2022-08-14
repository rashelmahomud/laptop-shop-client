import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service, setOrders }) => {

    const { _id, img, description, TotalQuentity, name, cost, Quantity, sublierName } = service;

    const navigate = useNavigate();

    const handelerbtn = (id) => {
        navigate(`/details/${id}`);
    }

    return (
        <div class="card w-100 bg-base-200 shadow-xl justify-content-center">
            <figure><img data-aos="flip-left"
                data-aos-duration="2000" className='rounded' src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p>{description}</p>
                <p>price: ${cost}</p>
                <p>Total Quentity {TotalQuentity}</p>
                <p>Quentity {Quantity}</p>
                <p>Name: {sublierName}</p>
                <div class="card-actions justify-center">
                    <button onClick={() => handelerbtn(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;