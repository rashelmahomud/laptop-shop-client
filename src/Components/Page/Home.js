import React from "react";
import Reviews from "../Review/Reviews";
import ContactUs from "../Shared/ContactUs/ContactUs";
import Footer from "../Shared/Navber/Footer/Footer";
import Banner from "./Banner";
import BestSelling from "./BestService/BestSelling";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import Services from "./ServiceAll/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Reviews />
      <CustomerReviews />
      <BestSelling />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
