import Menubar from "../parts/Menubar";
import arrow from "../../assets/arrow.png";
import Create from "../parts/Create";
import "./Editor.css";
import { useState, useEffect } from "react";
import Dancer from "../parts/Dancer";
import add from "../../assets/add.png"
function Editor() {
  //
  const [formations, setFormations] = useState([
    {
      name: "Triangle",
      dancers: [],
    },
  ]);

  const [index, setIndex] = useState(0);
  const [createActive, setcreateActive] = useState(false);

  let dancerStack = [];

  for (let i of formations[index].dancers) {
    dancerStack.push(
      <Dancer
        key={i.id + "" + index}
        id={i.id}
        x={i.x}
        y={i.y}
        formations={formations}
        setFormations={setFormations}
        index={index}
      />
    );
  }

  const createDancer = () => {
    let temp = [];
    temp = formations.slice();
    temp[index].dancers.push({ id: temp[index].dancers.length, x: 0, y: 0 });
    setFormations(temp);
  };

  const removeDancer = () => {
    let temp = [];
    temp = formations.slice();
    temp[index].dancers.pop();
    setFormations(temp);
  };

  return (
    <div id="container">
      <div id="title">
        <div>Formation {index + 1}:</div>
        <div style={{ height: "50px" }}>
          <div style={{ display: "inline-block" }}>
            <b>{formations[index].name}</b>
          </div>
          
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center"}}>
          <button
            onClick={() => {
              if (index > 0) {
                setIndex(index - 1);
              }
            }}
            style={{
              display: "inline-block",
            }}
          >
            <img style={{ width: "30px", rotate: "180deg" }} src={arrow}></img>
          </button>
            <button
              onClick={() => {
                setcreateActive(true);
              }}
            >
              <img style={{ width: "30px" }} src={add}></img>
            </button>
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
      </div>

      <div id="stageContainer">
        {dancerStack}
        <div id="offstageL"></div>
        <div id="stage"></div>
        <div id="offstageR"></div>
      </div>

      <Menubar
        setcreateActive={setcreateActive}
        createDancer={createDancer}
        formations={formations}
        index={index}
        removeDancer={removeDancer}
      />
      <Create
        setcreateActive={setcreateActive}
        createActive={createActive}
        setFormations={setFormations}
        formations={formations}
        setIndex={setIndex}
        index={index}
      />
    </div>
  );
}

export default Editor;
