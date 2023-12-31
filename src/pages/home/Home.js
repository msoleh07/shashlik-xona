import React from "react";
import "./Home.css";
import HomeOnePage from "../../components/homeComponents/homeOnePage/HomeOnePage";
import HomeTwoPage from "../../components/homeComponents/homeTwoPage/HomeTwoPage";

const Home = () => {
  return (
    <div className="home_page">
      <div className="all_header">
        <h1>Bosh sahiyfa</h1>
      </div>
      <HomeOnePage />
      <HomeTwoPage />
    </div>
  );
};

export default Home;
