import "./Menubar.css";
import { useState } from "react";
import addButton from "../../assets/add.png";
function Menubar(props) {
  return (
    <div className="menuContainter">
      <button
        onClick={() => {
          props.setcreateActive(true);
        }}
      >
        <img style={{ width: "60px" }} src={addButton}></img>
      </button>
    </div>
  );
}

export default Menubar;
