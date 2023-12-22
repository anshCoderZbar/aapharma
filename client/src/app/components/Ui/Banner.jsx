import React from "react";

import "styles/ComponentsUi.css";

export const Banner = (props) => {
  return (
    <div className="main_banner">
      <div className="container-fluid">
        <div
          style={{ backgroundImage: props.background }}
          className={`banner_head ${props.extra}`}
        >
          <h1>{props.heading}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
