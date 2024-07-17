import React from "react";

export const Accordion = (props) => {
  const { children } = props;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading_${props?.accId}`}>
        <button
          className={`accordion-button collapsed ${props?.extraClass}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse_${props?.accId}`}
          aria-expanded="true"
          aria-controls={`flush-collapse_${props?.accId}`}
        >
          {props?.heading}
        </button>
      </h2>
      <div
        id={`flush-collapse_${props?.accId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading_${props?.accId}`}
        data-bs-parent={`#accordionExample`}
      >
        {children}
      </div>
    </div>
  );
};
