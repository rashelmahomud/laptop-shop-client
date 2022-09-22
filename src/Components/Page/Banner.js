import React from 'react';
import img from '../../assects/image/fsd.png';
import './Banner.css';

const Banner = () => {
    return (

        <div className="banner-image hero min-h-screen hellotop mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img data-aos="flip-right"
                data-aos-duration="2000" src={img} />
                <div className='mr-20 mt-5'>
                    <h1 className="text-5xl font-bold font-serif">Welcome to Our Shops</h1>
                    <h1 className="text-5xl font-bold font-sans">Hello Dear Customers!</h1>
                    <p className="py-6 font-serif">Laptoop parts is a simply dummy text of the printing and typesetting industry. <br /> Our Shops is a best and Unice all Products..</p>
                    <button className="btn btn-primary font-serif">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;