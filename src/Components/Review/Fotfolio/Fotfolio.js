import React from 'react';
import myimage from '../../../assects/image/my.png';

const Fotfolio = () => {
    return (
        <div>
            <div>

                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <h2 className='font-bold text-2xl text-center'>MY INFORMATION</h2>
                                    </label>

                                </div>
                                <div>
                                    <div className=' p-20'>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={myimage} />
                                            </div>
                                        </div>

                                        <h1 className='text-2xl font-bold'> Rashel </h1>
                                    </div>
                                    <h1><span className='font-bold text-2xl'>Name: Md. Rashel</span></h1>
                                    <h1><span className='font-bold text-2xl'>Phone: +8801835199061</span></h1>
                                    <h1><span className='font-bold'>Email: rashelmahmudraj1998@gmail.com</span></h1>
                                    <h1><span className='font-bold'>Education: Nationnal University(BA) 2nd Year</span></h1>


                                    <ul className='my-5'>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JAVASCRIPT</li>
                                        <li>NODE.JS</li>
                                        <li>REACJT.JS</li>
                                        <li>BOOTSTRAP</li>
                                        <li>TAILDWINDCSS</li>

                                    </ul>


                                    <p><a href="url">https://great-website-9cb28.web.app</a></p>
                                    <p><a href="url">https://doctors-portal-7bf09.web.app</a></p>
                                    <p><a href="url">https://carphone-warehouse-d843f.web.app</a></p>
                                    <p><a href="url">https://best-photography-19d6d.web.app/home</a></p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Fotfolio;