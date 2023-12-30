import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routers/home/Home";

const Router = () => {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Router;
