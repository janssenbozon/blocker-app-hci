import { useState } from "react";
import "./Create.css";

function Create(props) {
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [previous, setPrevious] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setPrevious(false);
  };

  const handleChange2 = () => {
    setPrevious(!previous);
    setChecked(false);
  };

  const submit = () => {
    let temp = props.formations[props.index];
    console.log(temp);
    let tempdancer = JSON.parse(JSON.stringify(temp.dancers));

    if (name.length >= 1) {
      if (checked) {
        for (let i of tempdancer) {
          i.x = 0;
          i.y = 0;
        }
        props.setFormations([
          ...props.formations,
          { name: name, dancers: tempdancer },
        ]);
        props.setcreateActive(false);
        props.setIndex(props.formations.length);
      } else if (previous) {
        props.setFormations([
          ...props.formations,
          { name: name, dancers: tempdancer },
        ]);
        props.setcreateActive(false);
        props.setIndex(props.formations.length);
      } else {
        props.setFormations([...props.formations, { name: name, dancers: [] }]);
        props.setcreateActive(false);
        props.setIndex(props.formations.length);
      }
    } else {
      alert("Enter a name");
    }
  };

  return props.createActive ? (
    <div className="createContainter">
      <div className="createForm">
        <button
          style={{
            fontSize: "30px",
            padding: "5px",
            borderRadius: "8px",
            color: "white",
            position: "relative",
            left: -230,
          }}
          onClick={() => {
            props.setcreateActive(false);
          }}
        >
          <b>X</b>
        </button>
        <b>Create new form</b>

        <div>
          <form>
            <div style={{ textAlign: "left" }}>
              Name: <input onChange={(e) => setName(e.target.value)} />
              <br></br>
              <br></br>
              Select One:
              <br></br>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              ></input>
              <label
                onClick={() => {
                  handleChange();
                }}
              >
                Start with all dancers off stage
              </label>
              <br></br>
              <input
                type="checkbox"
                checked={previous}
                onChange={handleChange2}
              ></input>
              <label
                onClick={() => {
                  handleChange2();
                }}
              >
                Start with previous formation
              </label>
            </div>
          </form>
          <br></br>
          <button
            style={{
              backgroundColor: "#71FF989E",
              fontSize: "30px",
              padding: "5px",
              borderRadius: "8px",
              color: "white",
            }}
            onClick={submit}
          >
            <b>Create</b>
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default Create;
