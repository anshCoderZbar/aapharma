import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import "styles/ComponentsUi.css";

export const Banner = (props) => {
  return (
    <div className="main_banner">
      <div className="container-fluid">
        <div className="bread_crup">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            {props?.subMenu && <li>{props?.subMenu}</li>}
            {props?.subMenu && (
              <li>
                <ChevronRight />
              </li>
            )}
            <li>
              <Link
                className="bread_active"
                to={
                  props?.breadCrum
                    ? `/${props?.breadCrum}`
                    : window?.location?.pathname
                }
              >
                {props?.breadCrum
                  ? props?.breadCrum
                  : window?.location?.pathname
                      ?.replaceAll("/", "")
                      ?.replaceAll("-", " ")}
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{ backgroundImage: props.background }}
          className={`banner_head ${props.extra}`}
        >
          <h1 dangerouslySetInnerHTML={{ __html: props.heading }} />

          <p dangerouslySetInnerHTML={{ __html: props?.description }} />
        </div>
      </div>
    </div>
  );
};
