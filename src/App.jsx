import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero, Navbar, Works, Contact, Portfolio01, Portfolio02, About } from "./components";
import DynamicGradientBackground from './DynamicGradientBackground'; // Import the new component

const App = () => {
  return (
    <BrowserRouter basename="/lufei_portf/">
      <DynamicGradientBackground>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<><Hero /><About /><Works /><Contact /></>} />
          <Route path="/components/Portfolio01" element={<Portfolio01 />} />
          <Route path="/components/Portfolio02" element={<Portfolio02 />} />
        </Routes>
      </DynamicGradientBackground>
    </BrowserRouter>
  );
}

export default App;
