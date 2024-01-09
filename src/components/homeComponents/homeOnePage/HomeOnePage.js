import React, { memo } from "react";
import "./HomeOnePage.css";
import homeDataItems from "../../../static/homeData";

const HomeOnePage = () => {
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
                  <div className="price_container">
                    <span>Narxi:</span>
                    <p>{i.price} ming so'm</p>
                  </div>
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
