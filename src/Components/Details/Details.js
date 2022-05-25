import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../hook/useServiceDetails';
import OrderModal from './OrderModal';

const Details = () => {
    const { servicesId } = useParams();
    const [quantity, setQuantity] = useState({});
    const [orders, setOrders] = useState(null);
    const [service, setService] = useServiceDetails(servicesId);

    const handelDelivery = () => {
        console.log('hello dear delivery');

    }

    const updateQuantity = (e) => {
        console.log(e);
        e.preventDefault();
        const Quantity = e.target.quantity.value;
        if (!Quantity || Quantity < 0) {
            return;
        }

        fetch(`https://polar-spire-39773.herokuapp.com/service/${servicesId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ Quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                window.alert('quantity added');
                window.location.reload();

                e.target.reset();

            })

    }

    return (
        <div className='border lg:px-40 lg:py-5'>

            <div class="card bg-base-100 shadow-xl justify-content-center">
                <figure><img className='rounded' style={{ width: 400 }} src={service.img} alt="Shoes" /></figure>
                <div class="card-body text-center">
                    <h2 className='text-2xl font-bold'>{service.name}</h2>
                    <p>{service.description}</p>
                    <p className='font-bold'>{service.cost}</p>
                    <p className='font-bold'>Quentity {service.Quantity}</p>
                    <p>{service.sublierName}</p>
                    <div class="card-actions justify-center">
                        {/* <button onClick={() => setOrders(service)} class="btn btn-primary">Order Now</button> */}
                        <label onClick={() => setOrders(service)} for="my-modal-3" class="btn modal-button btn btn-primary">Order Now</label>
                    </div>
                </div>

                <div className='my-10 text-center border'>
                    <form onSubmit={updateQuantity}>
                        <input placeholder='Quentity Add' type="number" name="quantity" id="" />
                        <input className='btn' type="submit" value="Add Quantity" />
                    </form>
                </div>

            </div>

            {orders && <OrderModal setOrders={setOrders} orders={orders}></OrderModal>}


        </div>
    );
};

export default Details;