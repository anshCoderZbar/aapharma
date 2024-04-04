import React from "react";
import { Link } from "react-router-dom";

export const PageWrapper = ({ heading, slug, name }) => {
  return (
    <div className="page-wrapper">
      <h4 className="fw-bold py-3 mb-1">
        <span className="text-muted fw-light">Dashboard /</span>
        <Link to={`/${slug}`}> {name}</Link>
      </h4>
      <hr className="my-4" />
    </div>
  );
};
