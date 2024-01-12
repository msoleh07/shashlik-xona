import React, { memo, useState } from "react";
import "./About.css";
import aboutData from "../../static/aboutData";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  DecrementCart,
  IncrementCart,
  RemoveFromCart,
} from "../../redux/addToCart";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const About = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((s) => s.addToCart).map((i) => i.id);
  const add = (product) => {
    dispatch(ADD_TO_CART({ product }));
  };
  function incrementCart(id) {
    dispatch(IncrementCart({ id }));
  }
  function decrementCart(id) {
    dispatch(DecrementCart({ id: id }));
  }
  function deleteCart(id) {
    dispatch(RemoveFromCart(id));
  }

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
            {cartData.some((i) => i === item.id) ? (
              <div className="about_btn_cards">
                <div className="about_buttons_cards ">
                  <button onClick={() => decrementCart(item.id)}>
                    <FaMinus />
                  </button>
                  <span className="quantity">
                    {item.quantity}
                    ta
                  </span>
                  <button onClick={() => incrementCart(item.id)}>
                    <FaPlus />
                  </button>
                </div>
                <button onClick={() => deleteCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ) : (
              <button onClick={() => add(item)}>Sotib olish</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(About);
