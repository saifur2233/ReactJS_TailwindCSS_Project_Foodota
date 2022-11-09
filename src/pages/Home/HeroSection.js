import React from "react";
import HeroImg from "../../assets/images/home/hero.png";

const HeroSection = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={HeroImg} className="w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl text-secondary font-bold">
            Order Healthy And Fresh Food Any Time
          </h1>
          <p className="py-6">
            Italian food makes people think of big family dinners. So you may
            want to position your restaurant as a place to bring the whole
            family.
          </p>
          <button className="btn btn-secondary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
