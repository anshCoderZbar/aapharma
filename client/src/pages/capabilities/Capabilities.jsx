import React from "react";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "styles/Capabilities.css";
import { GetCapabilitiesOverviewMutation } from "rest/capabilities";

export default function Capabilities() {
  const getOverview = GetCapabilitiesOverviewMutation();
  return (
    <div className="capabilities_page">
      <div className="container-fluid">
        <div className="capabilities_section">
          <div className="bread_crup">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>
                <Link className="bread_active" to="/overview">
                  Capabilities
                </Link>
              </li>
            </ul>
          </div>
          <div className="row capability_inner_page">
            <div className="col-lg-6">
              <div className="capabilities_content">
                <h1 className="main_top_heading">
                  {getOverview?.data?.data?.heading &&
                    getOverview?.data?.data?.heading}
                </h1>
                <p>
                  {getOverview?.data?.data?.subheading &&
                    getOverview?.data?.data?.subheading}
                </p>
                <ul>
                  {getOverview?.data?.data?.list?.map((elm) => {
                    return <li>{elm}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="capabilities_img">
                <img
                  src={
                    getOverview?.data?.data?.image &&
                    getOverview?.data?.data?.image
                  }
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              getOverview?.data?.data?.description &&
              getOverview?.data?.data?.description,
          }}
          className="capabilities_bottom_content"
        />
      </div>
    </div>
  );
}
