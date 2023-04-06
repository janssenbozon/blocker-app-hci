import React, { useRef, useState, useEffect } from "react";
import "./Dancer.css";
const DraggableComponent = (props) => {
  console.log(props.x);
  const [pos, setPos] = useState({ left: props.x, top: props.y });

  const [isDragging, setDragging] = useState(false);
  const isDraggingRef = useRef(isDragging);
  const setDraggingState = (data) => {
    isDraggingRef.current = data;
    setDragging(data);
  };

  function onMouseDown(e) {
    setDraggingState(true);
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseMove(e) {
    if (isDraggingRef.current) {
      let rect;
      try {
        rect = e.target.parentNode.getBoundingClientRect();
        let newLeft = e.pageX - rect.left - 20;
        let newTop = e.pageY - rect.top - 20;

        if (
          newLeft > 0 &&
          newTop > 0 &&
          newLeft < rect.width &&
          newTop < rect.height
        ) {
          setPos({
            left: newLeft,
            top: newTop,
          });

          let temp = props.formations;

          temp[props.index].dancers[props.id] = {
            id: props.id,
            x: newLeft,
            y: newTop,
          };
          temp = temp.slice();
          props.setFormations(temp);
        } else setDraggingState(false);
      } catch {
        console.log("outofbounds");
      }
    }
    e.stopPropagation();
    e.preventDefault();
  }

  function onMouseUp(e) {
    setDraggingState(false);
    e.stopPropagation();
    e.preventDefault();
  }

  useEffect(() => {
    console.log(props.index);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  return <div style={pos} className="Dancer" onMouseDown={onMouseDown}></div>;
};
export default DraggableComponent;
