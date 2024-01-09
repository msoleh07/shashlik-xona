import React, { memo } from "react";
import "./HomeOnePage.css";
import { useNavigate, useLocation } from "react-router-dom";
import homeDataItems from "../../../static/homeData";

const HomeOnePage = () => {
  let naviget = useLocation();
  return (
    <div className="home_one_container scroll">
      {homeDataItems?.map((item, index) => (
        <div key={index} className="home_container">
          <div className="home_header">
            <h2>{item.title}</h2>
          </div>
          <div className="home_card_container">
            {item.allData?.map((i, inx) => (
              <div key={inx} className="card_container">
                <figure>
                  <img src={i.img} alt="" />
                </figure>
                <div className="img_title">
                  <p>{i.imgTitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(HomeOnePage);
