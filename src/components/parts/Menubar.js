import "./Menubar.css";
import { useState } from "react";
import add from "../../assets/add.png";
import lock from "../../assets/lock.png";
import undo from "../../assets/undo.png"
import redo from "../../assets/redo.png"
import plus from "../../assets/plus.png"
import dancer from "../../assets/dancer.png"
import minus from "../../assets/minus.png"
import dice from "../../assets/dice.png"
import note from "../../assets/note.png"


function Menubar(props) {
  return (
    <div className="menuContainter">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            props.setcreateActive(true);
          }}
        >
          <img style={{ width: "35px" }} src={add}></img>
        </button>
        <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>Create form</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            props.createDancer();
          }}
        >
          <img style={{ width: "35px" }} src={plus}></img>
        </button>
        <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>Add dancer</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            props.setcreateActive(true);
          }}
        >
          <img style={{ width: "35px" }} src={dancer}></img>
        </button>
        <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>{props.formations[props.index].dancers.length} dancers</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            props.removeDancer();
          }}
        >
          <img style={{ width: "35px" }} src={minus}></img>
        </button>
        <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>Remove dancer</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() => {
            props.setcreateActive(true);
          }}
        >
          <img style={{ width: "35px" }} src={dice}></img>
        </button>
        <p style={{ color: "white", fontSize: "15px", fontWeight: "bold" }}>Suggested form</p>
      </div>
    </div>
  );
}

export default Menubar;
