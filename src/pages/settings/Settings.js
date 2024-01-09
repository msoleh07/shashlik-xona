import React, { memo } from "react";
import "./Settings.css";
import { FaTrash, FaEdit } from "react-icons/fa";

const Settings = () => {
  return (
    <div className="settings_page scroll">
      <div className="all_header">
        <h1>Sozlamalar</h1>
      </div>
      <div className="setting_admin_header">
        <div className="setting_admin_header_container">
          <div className="setting_admin_img">
            <img
              src="https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png"
              alt=""
            />
          </div>
          <div className="setting_admin_data">
            <div className="setting_admin_header_name">
              <h2>
                Muhammadsoleh <span>account</span>
              </h2>
            </div>
            <div className="admin_container">
              <div className="setting_admin_data_container">
                <div className="setting_admin_title">
                  <span>Foydalanuvchi nomi:</span>
                  <span>Nomi:</span>
                  <span>Familiyasi:</span>
                  <span>Yili:</span>
                  <span>Yoshi:</span>
                </div>
                <div className="setting_admin_title_name">
                  <p>muhammadsoleh07</p>
                  <p>Muhammadsoleh</p>
                  <p>Turg'unov</p>
                  <p>2007</p>
                  <p>17</p>
                </div>
              </div>
              <div className="setting_admin_dalete_container">
                <button>
                  <FaTrash />
                </button>
                <button>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Settings);
