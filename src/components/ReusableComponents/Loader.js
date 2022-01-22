import React from "react";

const Loader = ({ otherClassWrap, otherClass }) => {
  return (
    <div className={`loader--wrap ${otherClassWrap ? otherClassWrap : ""}`}>
      <div
        className={`spinner-wrap ${otherClass ? otherClass : ""}`}
      >
        <span className="spinner"></span>
      </div>
    </div>
  );
};

export default Loader;