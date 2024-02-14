import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero, Navbar, Works, Contact, Portfolio01, About } from "./components";

const App = () => {
  return (
    
    <BrowserRouter basename="/lufei_portf/">
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<><Hero /><About /><Works /><Contact /></>} />
          <Route path="/components/Portfolio01" element={<Portfolio01 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
