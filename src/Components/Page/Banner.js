import React from 'react';
import img from '../../assects/image/laptop.jpg';
import imgs from '../../assects/image/banner.png';
import './Banner.css';

const Banner = () => {
    return (

        <div>
            <div className="banner-container">
                <div className="banner-image">
                    <div className="title-container text-center">
                        <div className="title">

                            <div>
                                <h1 className="text-white font-bold">Welcome to Our Shops</h1>
                                <h1 className="text-white">Hello Dear Customers!</h1>


                            </div>
                            <h6 className="text-white my-5 text-2xl font-bold text-primary">Laptoop parts is a simply dummy text of the printing and typesetting industry. <br /> Our Shops is a best and Unice all Products..</h6>
                            <button className="btn btn-primary text-white">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className="hero min-h-screen">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">Hello Dear Customers!</h1>
        //             <p className="py-6">Laptoop parts is a simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        //             <button className="btn btn-primary text-white">Explore</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;