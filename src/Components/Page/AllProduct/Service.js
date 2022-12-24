import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ pdc, setOrders }) => {

    const { _id, img, description, name, cost } = pdc;

    const navigate = useNavigate();
  
    const handelerbtn = (id) => {
        navigate(`/details/${id}`);
    }

    return (
        <div class="card w-100 bg-base-300 shadow-xl mx-auto justify-content-center transition duration-700 ease-in-out">
            <figure><img data-aos="flip-left"
                data-aos-duration="2000" className='rounded' src={img} alt="Shoes" /></figure>
            <div class="card-body text-center">
                <h2 className='text-2xl text-left font-bold'>{name}</h2>
                <p className='text-justify'>{description}</p>
                <p className='text-left'>price: ${cost}</p>
                <div class="card-actions justify-center">
                    <button onClick={() => handelerbtn(_id)} class="btn text-white w-full btn-outline btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;