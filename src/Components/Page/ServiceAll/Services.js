import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {

    const [servies, setServices] = useState([]);

    useEffect(() => {
        fetch('https://polar-spire-39773.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div><h2 className='text-center text-3xl my-20'>ALL PRODUCTS<br /> <progress class="progress w-56"></progress></h2></div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10'>
                {
                    servies.map(service => <Service key={service._id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;