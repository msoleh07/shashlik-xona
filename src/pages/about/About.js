import React, { memo } from "react";
import "./About.css";
import aboutData from "../../static/aboutData";

import torgamchi from "../../imgs/torgamchi shashlik.jpg";

const About = () => {
  return (
    <div className="about_page scroll">
      <div className="all_header">
        <h1>Biz haqimizda</h1>
      </div>
      <div className="about_data_container">
        {aboutData?.map((item, index) => (
          <div key={index} className="about_data_card">
            <div className="about_data_img">
              <img src={item.img} alt="" />
            </div>
            <div className="about_data_title_container">
              <h2>{item.title}</h2>
              {item?.allData?.map((i, index) => (
                <ul key={index}>
                  <li>
                    <span>Narxi:</span>
                    <p>{i.price} ming so'm</p>
                  </li>
                  <li>
                    <span>{i.grTitle}:</span>
                    <p>{i.gr} </p>
                  </li>
                  <li>
                    <span>Dastavka narxi:</span>
                    <p>15 ming so'm </p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(About);
