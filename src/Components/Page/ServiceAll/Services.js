import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Service from './Service';
import ServiceHead from './ServiceHead';

const Services = () => {
    const [servies, setServices] = useState([]);
    const [loading] = useAuthState(auth);


    useEffect(() => {
        fetch('https://laptop-shop.onrender.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div>
            <ServiceHead />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                {
                    servies.slice(0 - 6).map(service => <Service key={service._id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;