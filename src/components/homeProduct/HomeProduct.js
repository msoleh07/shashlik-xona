import React from "react";
import "./HomeProduct.css";
import { Link } from "react-router-dom";
import menu from "../../static/menuBar";
import { LuLogOut } from "react-icons/lu";

const HomeProduct = () => {
  return (
    <div className="home_container">
      <div className="sidebar_menu">
        <ul>
          <li className="logo">
            <Link to={"/"}>
              <span className="icon">
                <img
                  src="https://www.krumpli.co.uk/wp-content/uploads/2022/11/Chicken-Shashlik-Kebab-04-735x735.jpg"
                  alt=""
                />
              </span>
              <h2 className="text">Shashlik logotip</h2>
            </Link>
          </li>
          {menu?.map((i, index) => (
            <li key={index}>
              <Link to={i.link}>
                <span className="icon">{i.icon}</span>
                <span className="text">{i.title}</span>
              </Link>
            </li>
          ))}
          <div className="bottom">
            <li>
              <Link to={"/logOut"}>
                <span className="icon">
                  <LuLogOut />
                </span>
                <span className="text">Chiqish</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HomeProduct;
