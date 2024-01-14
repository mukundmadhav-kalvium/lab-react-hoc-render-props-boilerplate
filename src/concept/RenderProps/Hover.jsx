import React from "react";

const Hover = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onMouseOver={props.increase}>Hover</button>
    </div>
  );
};

export default Hover;
