import React, { memo } from "react";
import "./Home.css";
import HomeOnePage from "../../components/homeComponents/homeOnePage/HomeOnePage";

const Home = () => {
  return (
    <div className="home_page scroll">
      <div className="all_header">
        <h1>Bosh sahiyfa</h1>
      </div>
      <HomeOnePage />
    </div>
  );
};

export default memo(Home);
