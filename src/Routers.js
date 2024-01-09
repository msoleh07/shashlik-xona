import React, { memo } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Massage from "./pages/massage/Massage";
import Settings from "./pages/settings/Settings";
import Sidebar from "./components/sidebar/Sidebar";
import Board from "./pages/board/Board";
import Logout from "./pages/logout/Logout";

const Routers = () => {
  return (
    <div className="routes">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/board" element={<Board />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/message" element={<Massage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<>not found</>} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default memo(Routers);
