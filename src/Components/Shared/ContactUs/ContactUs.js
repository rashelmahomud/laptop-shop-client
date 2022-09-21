import React from 'react';
import contact from '../../../assects/contact.png';
const ContactUs = () => {
    return (
        <div>
            <div className='grid justify-items-center mb-5'>
                <h1 className='text-primary text-2xl font-bold'>contact Us</h1>
                <h4 className=' text-4xl font-bold'>Say Conected with us</h4>
            </div>

            <div className="hero min-h-screen hellotop mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className='lg:p-10 p-3 bg-base-300 rounded'>
                        <div className='grid justify-items-center'>
                            <input className='lg:w-80 rounded-lg p-3' type="text" placeholder='Email Address' /> <br />
                            <input className='lg:w-80 rounded-lg p-3' type="text" placeholder='subject' /> <br />
                            <textarea className='lg:w-80 rounded-lg p-3' name="" id="" cols="40" rows="8" placeholder='your massage'></textarea>
                            <input className='btn btn-primary mt-5 text-white' type="submit" value="submite" />
                        </div>
                    </div>

                    <img className='w-100 lg:mr-20' data-aos="flip-right"
                        data-aos-duration="2000" src={contact} />
                </div>
            </div>

        </div>

    );
};

export default ContactUs;