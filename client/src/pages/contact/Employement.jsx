import React, { useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Pages.css";
import { GetEmploymentBanner, GetEmploymentResponsibilities } from "rest/main";
import { Modal } from "app/components/Modal";

export default function Employement() {
  const getEmploymentBanner = GetEmploymentBanner();
  const getEmploymentResponsibilities = GetEmploymentResponsibilities();
  const [open, setOpen] = useState(false);
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
        <div className="container-fluid">
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
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      getEmploymentResponsibilities?.data?.data?.list &&
                      getEmploymentResponsibilities?.data?.data?.list,
                  }}
                />
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
                  <button data-bs-toggle="modal" data-bs-target="#modal1">
                    Submit your Resume
                  </button>
                </div>
              </div>
            </div>
            <Modal id="modal1">
              <div className="contact-form pb-0">
                <form>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control contact-form"
                    name="name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control contact-form"
                    name="email"
                    required
                  />
                  <input
                    type="file"
                    placeholder="Submit resume"
                    className="form-control contact-form"
                    name="email"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="submit-btn m-0"
                  />
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
