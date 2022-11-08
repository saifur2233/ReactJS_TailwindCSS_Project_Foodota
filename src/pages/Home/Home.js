import React from "react";
import HeroSection from "./HeroSection";
import HomePageServices from "./HomePageServices";
import Process from "./Process";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Process></Process>
      <HomePageServices></HomePageServices>
    </div>
  );
};

export default Home;
