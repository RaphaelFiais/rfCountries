import React from "react";
import Home from "./containers/Home";
import CountryInfo from "./containers/CountryInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/country/:name" element={<CountryInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default MyRoutes;
