import React, { memo } from "react";
import "./Cart.css";
import CartNewData from "../../components/cartComponents/cartNewData/CartNewData";
import CartNoneData from "../../components/cartComponents/cartNoneData/CartNoneData";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((s) => s.addToCart);

  return (
    <div className="cart_page scroll">
      <div className="all_header">
        <h1>Sotib olingan mahsulotlar</h1>
      </div>
      {cartItems?.length ? <CartNewData /> : <CartNoneData />}
    </div>
  );
};

export default memo(Cart);
