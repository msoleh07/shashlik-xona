import React from "react";
import "./CartNewData.css";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import {
  IncrementCart,
  DecrementCart,
  RemoveFromCart,
} from "../../../redux/addToCart";

const CartNewData = () => {
  const cartItems = useSelector((s) => s.addToCart);
  const dispatch = useDispatch();
  let cartLength = cartItems.reduce((a, b) => a + b.quantity, 0);

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
    <div className="cart_data_container">
      <div className="cart_length_header">
        <h2>
          Sotib olingan mahsulotlar soni <span>( {cartLength} )</span>
        </h2>
      </div>
      <div className="cart_items_container">
        <div className="cart_container">
          {cartItems?.map((i, inx) => (
            <div key={inx} className="cart_cards_container">
              <div className="cart_img_cards">
                <img src={i.img} alt="" />
              </div>
              <div
                style={{
                  background: `url(${i?.imgs})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="cart_all_data_container"
              >
                <div className="cart_items_cards_data">
                  <div className="cart_title_header">
                    <h2>{i.title}</h2>
                  </div>
                  {i?.allData?.map((itm, index) => (
                    <ul key={index}>
                      <li>
                        <span>Narxi:</span>
                        <p>{itm.price} ming so'm</p>
                      </li>
                      <li>
                        <span>{itm.grTitle}</span>
                        <p>{itm.gr} ming so'm</p>
                      </li>
                      <li>
                        <span>Sotib olinganlari narxi:</span>
                        <p>{itm?.price * i?.quantity} ming so'm</p>
                      </li>
                      <li>
                        <div className="cart_title">
                          <span>Yana qo'shish</span>
                        </div>
                        <div className="cart_btn_dalete">
                          <div className="cart_buttons_cards">
                            <button onClick={() => decrementCart(i.id)}>
                              <FaMinus />
                            </button>
                            <span className="quantity">{i.quantity} ta</span>
                            <button onClick={() => incrementCart(i.id)}>
                              <FaPlus />
                            </button>
                          </div>
                          <button onClick={() => deleteCart(i.id)}>
                            <FaTrash />
                          </button>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* {cartItems?.map((item, index) => (
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
            </div>
          ))} */}
        </div>
        <div className="cart_price_container">
          <div className="cart_total_price_container"></div>
        </div>
      </div>
    </div>
  );
};

export default CartNewData;
