import React, { useEffect, useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Pages.css";
import {
  GetEmploymentBanner,
  GetEmploymentResponsibilities,
  SendResume,
} from "rest/main";
import { Modal } from "app/components/Modal";
import { ButtonLoader } from "app/components/Ui/ButtonLoader";

export default function Employement() {
  const getEmploymentBanner = GetEmploymentBanner();
  const getEmploymentResponsibilities = GetEmploymentResponsibilities();
  const [formState, setFormState] = useState({ name: "", email: "" });
  const [file, setFile] = useState(null);

  const submitResume = SendResume(setFormState, setFile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (event) => {
    setFile(event?.target?.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("resumefile", file);
    submitResume.mutate(formData);
  };

  useEffect(() => {
    if (submitResume?.isSuccess) {
      const modal = document.querySelector(".btn-close");
      modal?.click();
    }
  }, [submitResume?.isSuccess]);

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
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control contact-form"
                    name="name"
                    onChange={handleChange}
                    value={formState?.name}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control contact-form"
                    name="email"
                    onChange={handleChange}
                    value={formState?.email}
                    required
                  />
                  <input
                    type="file"
                    name="resume"
                    className="form-control contact-form"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                  {submitResume?.isPending ? (
                    <ButtonLoader />
                  ) : (
                    <input
                      type="submit"
                      value="Submit"
                      className="submit-btn m-0"
                    />
                  )}
                </form>
              </div>
            </Modal>
            <div
              id="toast"
              style={{
                background: submitResume?.isSuccess ? "#198754" : "#dc3545",
              }}
              className={`toaster  ${
                submitResume?.isSuccess || submitResume?.isError ? "show" : ""
              }`}
            >
              <div
                className={`desc  ${
                  submitResume?.isSuccess ? "bg-success" : "bg-danger"
                }`}
              >
                {submitResume.isSuccess
                  ? "Details Submitted"
                  : "OOPS! some error occured"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
