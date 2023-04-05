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
        <b style={{fontSize: "20px", fontWeight: "normal"}}>Formation {index + 1}:</b>
        <div style={{ display: "flex", height: "50px", alignItems: "center", justifyContent:"center",}}>
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
          >
            <img style={{ width: "30px", rotate: "180deg" }} src={arrow}></img>
          </button>
          <b>{formations[index].name}</b>
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
