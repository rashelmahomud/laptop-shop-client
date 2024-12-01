import React from "react";
import img from "../../assects/image/fsd.png";
import "./Banner.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="banner-image hero min-h-screen hellotop mx-auto">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div>
         
          <img data-aos="flip-right" data-aos-duration="2000" src={img} />
        </div>
        <div className="mr-20 mt-5">
          <TypeAnimation
            sequence={[
              
              `\nWelcome to Our Shops`,
              1000,
            ]}
            speed={50}
            style={{ fontSize: "3em" }}
            repeat={Infinity}
          />
      <h1 className="text-5xl font-bold font-sans">
            Hello Dear Customers!
          </h1>
          <p className="py-6 font-serif">
         
            Laptoop parts is a simply dummy text of the printing and typesetting
            industry. <br /> Our Shops is a best and Unice all Products..
          </p>
          <button className="btn btn-primary font-serif">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
