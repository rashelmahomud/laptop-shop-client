import React, { useEffect, useState } from "react";
import Service from "./Service";
import ServiceHead from "./ServiceHead";
import PrimaryAxios from "../../Api/Primary";

const Services = () => {
  const [servies, setServices] = useState([]);
  useEffect(() => {
    const fetchService = async () => {
      try{const res = await PrimaryAxios.get("/service");
        setServices(res.data);
      }catch(error) {
        throw error.data.message('data fetching error services')
      }
    };

    fetchService();
  }, []);


  return (
    <div>
      <ServiceHead />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 mx-3 lg:mx-5">
        {servies.slice(0 - 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
