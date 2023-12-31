import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import menu from "../../static/menuBar";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="main_container">
      <motion.div
        animate={{ width: isOpen ? "300px" : "80px" }}
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
              activeClassName="active"
              to={i.link}
              key={index}
              className={isOpen ? " routes_link" : "nav_link routes_link"}
            >
              <div className="icon">{i.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    {i.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
        <div className="bottom_section">
          <NavLink
            activeClassName="active"
            to={"/logout"}
            className={isOpen ? " routes_link" : "nav_link routes_link"}
          >
            <div className="icon">
              <IoLogOutOutline />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="link_text"
                >
                  Log out
                </motion.div>
              )}
            </AnimatePresence>
          </NavLink>
        </div>
      </motion.div>
      <main className="main_container">{children}</main>
    </div>
  );
};

export default Sidebar;
