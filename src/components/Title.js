import React from "react";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h3>{title || "default title"}</h3>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
