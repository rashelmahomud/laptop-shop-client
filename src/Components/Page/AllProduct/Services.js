import React, { useEffect, useState } from 'react';
import Service from './Service';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SuperService = () => {

    const [searchProduct, setSearchProduct] = useState([]);
    const [query, setQuery] = useState('');
    const [servies, setServices] = useState([]);
    const [user, loading, error] = useAuthState(auth);


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

    const searchText = (e) => {
        setQuery(e.target.value);
        const searchProduct = servies.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        setSearchProduct(searchProduct);
    }



    return (
        <div>
            <div className='p-10 text-center'>

                <input type="text" placeholder="Find Your Product" className="input input-bordered input-primary w-full max-w-xs" value={query} onChange={searchText} />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>

                {
                    searchProduct.length ? searchProduct.map(pdc => <Service key={pdc.id} pdc={pdc}></Service>) : servies.map(pdc => <Service key={pdc.id} pdc={pdc}></Service>)
                }


            </div>
        </div>
    );
};

export default SuperService;