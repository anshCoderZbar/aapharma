import React from "react";

export const Accordion = (props) => {
  const { children } = props;
  return (
    <div className="accordion-item">
      <h2
        onClick={props?.onClick}
        className="accordion-header"
        id={`flush-heading${props?.accId}`}
      >
        <button
          className={`accordion-button  collapsed ${props?.extraClass}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props?.accId}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${props?.accId}`}
        >
          {props?.heading}
        </button>
      </h2>
      <div
        id={`flush-collapse${props?.accId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${props?.accId}`}
        data-bs-parent={`#accordionFlushExample`}
      >
        {children}
      </div>
    </div>
  );
};
