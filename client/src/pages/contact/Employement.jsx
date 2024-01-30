import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Pages.css";
import { GetEmploymentBanner, GetEmploymentResponsibilities } from "rest/main";

export default function Employement() {
  const getEmploymentBanner = GetEmploymentBanner();
  const getEmploymentResponsibilities = GetEmploymentResponsibilities();
  return (
    <div className="employement_page">
      <Banner
        heading={
          getEmploymentBanner?.data?.data?.heading &&
          getEmploymentBanner?.data?.data?.heading
        }
        background={`url(${
          getEmploymentBanner?.data?.data?.image &&
          getEmploymentBanner?.data?.data?.image
        })`}
        extra="employement_banner"
      />
      <div className="employment_content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="employement_details">
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      getEmploymentResponsibilities?.data?.data?.heading &&
                      getEmploymentResponsibilities?.data?.data?.heading,
                  }}
                />
                <ul>
                  {getEmploymentResponsibilities?.data?.data?.list &&
                    getEmploymentResponsibilities?.data?.data?.list?.map(
                      (elm, i) => <li key={i}>{elm}</li>
                    )}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="apply_box">
                <div className="apply_box_content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        getEmploymentResponsibilities?.data?.data
                          ?.description &&
                        getEmploymentResponsibilities?.data?.data?.description,
                    }}
                  />
                  <button>Submit your Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
