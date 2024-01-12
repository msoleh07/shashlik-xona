import React, { memo, useState } from "react";
import "./Sidebar.css";
import menu from "../../static/menuBar";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Sidebar = ({ children }) => {
  const cartItems = useSelector((s) => s.addToCart);
  let cartLength = cartItems.reduce((a, b) => a + b.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main_container">
      <div
        style={{
          width: isOpen ? "300px" : "80px",
          transition: isOpen ? "all .2s linear" : "all .3s linear",
        }}
        className="sidebar"
      >
        <div className="top_section">
          <Link to={"/"}>
            <img
              src="https://www.krumpli.co.uk/wp-content/uploads/2022/11/Chicken-Shashlik-Kebab-04-735x735.jpg"
              className="logo"
            />
            {isOpen && <h1 className="logo_text">A.Abdulhayev</h1>}
          </Link>
          <div className={isOpen ? "bars_border" : "section_bars"}>
            {isOpen ? (
              <IoMdClose onClick={toggle} />
            ) : (
              <FaBars onClick={toggle} />
            )}
          </div>
        </div>
        <section className="routes">
          {menu?.map((i, index) => (
            <NavLink
              key={index}
              to={i.link}
              className={isOpen ? " routes_link" : "nav_link routes_link"}
            >
              <div className="icon">
                {i.icon}
                {cartLength > 0 && (
                  <span className={i?.class}>
                    {i?.link === "/cart" && cartLength}
                  </span>
                )}
              </div>

              {isOpen && <div className="link_text">{i.title}</div>}
            </NavLink>
          ))}
        </section>
        <div className="bottom_section">
          <NavLink
            to={"/logout"}
            className={isOpen ? " routes_link" : "nav_link routes_link"}
          >
            <div className="icon">
              <IoLogOutOutline />
            </div>

            {isOpen && <div className="link_text">Log out</div>}
          </NavLink>
        </div>
      </div>
      <main className="main_container">{children}</main>
    </div>
  );
};

export default memo(Sidebar);
