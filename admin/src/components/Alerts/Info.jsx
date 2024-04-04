import React from "react";

export const InfoComponent = ({ message }) => {
  return (
    <div className="alert alert-info" role="alert">
      {message}
    </div>
  );
};
