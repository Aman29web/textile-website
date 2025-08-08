import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomeRouter from "./pages/home/HomeRouter";


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> 
        <Routes>
          <Route path="/" element={<HomeRouter></HomeRouter>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
