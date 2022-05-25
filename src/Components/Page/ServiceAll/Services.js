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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10'>
            {
                servies.map(service => <Service key={service._id}  service={service} ></Service>)
            }
        </div>
    );
};

export default Services;