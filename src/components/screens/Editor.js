import Menubar from "../parts/Menubar";
import arrow from "../../assets/arrow.png";
import Create from "../parts/Create";
import "./Editor.css";
import { useState } from "react";
function Editor() {
  const [formations, setFormations] = useState([{ name: "Triangle" }]);
  const [index, setIndex] = useState(0);
  const [createActive, setcreateActive] = useState(false);
  return (
    <div id="container">
      <div id="title">
        <div>Formation {index + 1}:</div>
        <div style={{ height: "50px" }}>
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
            style={{
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            <img style={{ width: "30px", rotate: "180deg" }} src={arrow}></img>
          </button>
          <div style={{ display: "inline-block" }}>
            <b>{formations[index].name}</b>
          </div>
          <button
            onClick={() => {
              if (index + 1 < formations.length) {
                setIndex(index + 1);
              }
            }}
            style={{ display: "inline-block" }}
          >
            <img style={{ width: "30px" }} src={arrow}></img>
          </button>
        </div>
      </div>

      <div id="stageContainer">
        <div id="offstageL"></div>
        <div id="stage"></div>
        <div id="offstageR"></div>
      </div>

      <Menubar setcreateActive={setcreateActive} />
      <Create
        setcreateActive={setcreateActive}
        createActive={createActive}
        setFormations={setFormations}
        formations={formations}
        setIndex={setIndex}
      />
    </div>
  );
}

export default Editor;
