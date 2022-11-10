import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Service/ServiceCard";

const HomePageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://foodota-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl text-secondary font-bold">
          Today Special Menu
        </h1>
        <p className="py-6">
          Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
          tellus in metus vulputate eu scelerisque felis.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Link to="/services">
          <button className="btn btn-accent text-white">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePageServices;
