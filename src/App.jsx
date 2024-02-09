import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero, Navbar, Works, Tech, SimplePage, About } from "./components";

const App = () => {
  return (
    
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<><Hero /><About /><Works /><Tech /></>} />
          <Route path="/components/simplepage" element={<SimplePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
