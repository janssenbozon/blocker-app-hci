import { useState } from "react";
import "./Create.css";

function Create(props) {
  const [name, setName] = useState("");
  const submit = () => {
    if (name.length >= 1) {
      props.setFormations([...props.formations, { name: name }]);
      props.setcreateActive(false);
      props.setIndex(props.formations.length);
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
              <input type="checkbox"></input>
              <label>Start with all dancers off stage</label>
              <br></br>
              <input type="checkbox"></input>
              <label>Start with previous formation</label>
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
