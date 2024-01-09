import React, { memo } from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart_page scroll">
      <div className="all_header">
        <h1>Sotib olingan mahsulotlar</h1>
      </div>
    </div>
  );
};

export default memo(Cart);
