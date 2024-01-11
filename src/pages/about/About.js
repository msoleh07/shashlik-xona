import React, { memo } from "react";
import "./About.css";
import aboutData from "../../static/aboutData";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/addToCart";

const About = () => {
  const store = useSelector((s) => s.addToCart);
  const dispatch = useDispatch();
  console.log(store);
  const add = (product) => {
    dispatch(ADD_TO_CART({ product }));
  };
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
            <button onClick={() => add(item)}>Sotib olish</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(About);
