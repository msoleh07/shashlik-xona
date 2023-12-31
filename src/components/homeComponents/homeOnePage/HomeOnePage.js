import React from "react";
import "./HomeOnePage.css";
import { useNavigate } from "react-router-dom";

const HomeOnePage = () => {
  let naviget = useNavigate();
  console.log(naviget);
  return <div className="home_one_container"></div>;
};

export default HomeOnePage;
