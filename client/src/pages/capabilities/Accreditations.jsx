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
          {/* <div className="row accreditations_content">
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
              // <h1 className="main_top_heading">
              //   {getAccreditation?.data?.data?.heading &&
              //     getAccreditation?.data?.data?.heading}
              // </h1> 
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      getAccreditation?.data?.data?.description &&
                      getAccreditation?.data?.data?.description,
                  }}
                />
              </div>
            </div>
          </div> */}
          <div className="row g-4 mt-5 mb-5">
            {getAccreditation?.data?.data?.map((elm, index) => {
              return (
                <div key={index} className="col-12 col-sm-6 col-md-4">
                  <div className="accrediation_btm_card d-flex flex-column h-100">
                    <img
                      src={elm?.image}
                      alt="accreditation image"
                      className="img-fluid"
                    />
                    <p
                      className="mt-auto"
                      dangerouslySetInnerHTML={{ __html: elm?.description }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
