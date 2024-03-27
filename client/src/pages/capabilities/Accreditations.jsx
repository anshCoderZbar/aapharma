import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { GetAccredationMutation } from "rest/capabilities";

import "styles/Capabilities.css";

export default function Accreditations() {
  const getAccreditation = GetAccredationMutation();
  return (
    <div className="accreditations_page">
      <div className="container-fluid">
        <div className="row accreditations_content">
          <div className="bread_crup">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <ChevronRight />
              </li>
              <li>
                <Link className="bread_active" to="/accreditations">
                  accreditations
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="accreditations_img">
              <img
                src={
                  getAccreditation?.data?.data?.image &&
                  getAccreditation?.data?.data?.image
                }
                alt="accreditations"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="accreditations_main_content">
              <h1 className="main_top_heading">
                {getAccreditation?.data?.data?.heading &&
                  getAccreditation?.data?.data?.heading}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    getAccreditation?.data?.data?.description &&
                    getAccreditation?.data?.data?.description,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
