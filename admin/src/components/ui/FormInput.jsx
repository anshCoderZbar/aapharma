import React from "react";

import "styles/forminput.css";

export const FormInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      type={props?.type}
      className={`form-control form_input ${props?.extraClass}`}
      name={props?.name}
      placeholder={props?.placeholder}
      {...props}
    />
  );
});
