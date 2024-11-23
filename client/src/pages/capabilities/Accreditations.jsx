import { Banner } from "app/components/Ui/Banner";
import React from "react";
import { GetAccredationMutation } from "rest/capabilities";

import "styles/Capabilities.css";

export default function Accreditations() {
  const getAccreditation = GetAccredationMutation();
  return (
    <div className="accreditations_page">
      <Banner
        heading={"Accreditations"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="max-container">
          <div className="row accreditations_content">
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
                {/* <h1 className="main_top_heading">
                {getAccreditation?.data?.data?.heading &&
                  getAccreditation?.data?.data?.heading}
              </h1> */}
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
          <div className="row mb-5">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="accrediation_btm_card">
                <img
                  src={require("assets/accrediation_card_img.png")}
                  alt="accrediation image"
                />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="accrediation_btm_card">
                <img
                  src={require("assets/accrediation_card_img.png")}
                  alt="accrediation image"
                />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="accrediation_btm_card">
                <img
                  src={require("assets/accrediation_card_img.png")}
                  alt="accrediation image"
                />
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
