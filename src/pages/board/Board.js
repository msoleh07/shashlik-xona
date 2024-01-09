import React, { memo } from "react";
import "./Board.css";

const Board = () => {
  return (
    <div className="board_page scroll">
      <div className="all_header">
        <h1>Zakaz berish</h1>
      </div>
    </div>
  );
};

export default memo(Board);
