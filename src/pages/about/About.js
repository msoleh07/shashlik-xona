import React, { memo } from "react";
import "./About.css";

import torgamchi from "../../imgs/torgamchi shashlik.jpg";

const About = () => {
  return (
    <div className="about_page scroll">
      <div className="all_header">
        <h1>Biz haqimizda</h1>
      </div>
      <div className="about_data_container">
        <div className="about_data_card">
          <div className="about_data_img">
            <img src={torgamchi} alt="" />
          </div>
          <div className="about_data_title_container">
            <h2>Torgamchi shashlik</h2>
            <ul>
              <li>
                <span>Narxi:</span>
                <p>12 so'm</p>
              </li>
              <li>
                <span>Gr:</span>
                <p>125</p>
              </li>
              <li>
                <span>Dast narxi:</span>
                <p>15 so'm</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
