import React from 'react';
import img from '../../assects/image/fsd.png';
import imgs from '../../assects/image/banner.png';
import './Banner.css';

const Banner = () => {
    return (

        // <div>
        //     <div className="banner-container">
        //         <div className="banner-image">
        //             <div className="title-container text-center">
        //                 <div className="title">

        //                     <div data-aos="fade-up"
        //                         data-aos-duration="1000">
        //                         <h1 className="text-white font-bold">Welcome to Our Shops</h1>
        //                         <h1 className="text-white">Hello Dear Customers!</h1>
        //                     </div>
        //                     <h6 data-aos="flip-left"
        //                         data-aos-duration="1000" className="text-white my-5 text-2xl font-bold text-primary">Laptoop parts is a simply dummy text of the printing and typesetting industry. <br /> Our Shops is a best and Unice all Products..</h6>
        //                     <button className="btn btn-primary text-white">Explore</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="banner-image hero min-h-screen hellotop mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img data-aos="flip-right"
                data-aos-duration="2000" src={img} />
                <div className='mr-20 mt-5'>
                    <h1 className="text-5xl font-bold">Welcome to Our Shops</h1>
                    <h1 className="text-5xl font-bold">Hello Dear Customers!</h1>
                    <p className="py-6">Laptoop parts is a simply dummy text of the printing and typesetting industry. <br /> Our Shops is a best and Unice all Products..</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;