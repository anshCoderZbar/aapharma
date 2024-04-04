import React from "react";

export const Button = ({ children, ...rest }) => {
  return (
    <button
      onMouseEnter={(r) => (r.target.style.backgroundColor = "#34caff")}
      onMouseLeave={(r) => (r.target.style.backgroundColor = "#2a3071")}
      className="btn btn-primary d-grid w-100 primary-bg-color outline-0 border-0 py-2"
      {...rest}
    >
      {children}
    </button>
  );
};
