import React from "react";
import Testimonial from "./Components/Carousel";
import Hero from "./Components/Hero";
import MiniCard from "./Components/MiniCard";
import Navbar from "./Components/Navbar";
import WhatDo from "./Components/WhatDo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MiniCard />
      <WhatDo />
      <Testimonial />
    </div>
  );
};

export default App;
