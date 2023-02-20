import React from "react";

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
    </div>
  );
};

export default App;
