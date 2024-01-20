import React, { useEffect, useRef, useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetAllTherapeuticsSteps,
  GetServiceImage,
  GetTherapeuticsBanner,
  GetTherapeuticsSupport,
} from "rest/service";

export default function Services2() {
  const [stepId, setStepId] = useState();
  const getBanner = GetTherapeuticsBanner();
  const getSupportData = GetTherapeuticsSupport();
  const getAllSteps = GetAllTherapeuticsSteps();
  const getServiceImage = GetServiceImage();

  useEffect(() => {
    setStepId(getAllSteps?.data?.data[0]?.id);
  }, [getAllSteps?.data?.data]);

  return (
    <div className="services_page">
      <Banner
        extra="service_2_banner"
        heading={
          getBanner?.data?.data?.bannerHeading &&
          getBanner?.data?.data?.bannerHeading
        }
        background={`url(${
          getBanner?.data?.data?.bannerImage &&
          getBanner?.data?.data?.bannerImage
        })`}
      />
      <div className="container-fluid">
        <div className="page_sec_btn">
          <h3 className="page_sec_head">
            {getSupportData?.data?.data?.heading &&
              getSupportData?.data?.data?.heading}
          </h3>
          <div className="service_page_btns">
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button1}
            </button>
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button2}
            </button>
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button3}
            </button>
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button4}
            </button>
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button5}
            </button>
            <button>
              {getSupportData?.data?.data && getSupportData?.data?.data.button6}
            </button>
          </div>
          <div className="service_btn_content">
            <p>
              {getSupportData?.data?.data?.description &&
                getSupportData?.data?.data?.description}
            </p>
          </div>
        </div>
        <div className="page_sec_diagram">
          <div className="step_btns">
            {getAllSteps?.data?.data?.map((elm, i) => (
              <button
                className={` text-capitalize ${
                  elm?.id === stepId ? "step_active" : ""
                }`}
                key={i}
                onClick={() => setStepId(elm?.id)}
              >
                {elm?.buttonText}
                <span
                  className={`checkBtn text-capitalize ${
                    elm?.id === stepId ? "check_active" : ""
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="steps_diagram">
            <img
              src={
                getServiceImage?.data?.data?.featuredImage &&
                getServiceImage?.data?.data?.featuredImage
              }
              alt="step diagram"
              className="tp_img w-100"
            />
            {getAllSteps?.data?.data?.length >= 1 &&
              getAllSteps?.data?.data?.map((elm, i) => {
                return (
                  elm?.id === stepId && (
                    <div
                      key={i}
                      className={`text_content_service vss_${i + 1}`}
                    >
                      {elm?.icon && (
                        <div className="abs_img">
                          <img src={elm?.icon} alt="step diagram" />
                        </div>
                      )}
                      <div className="abs_content">
                        {elm?.heading.map((elm) => (
                          <h2>{elm}</h2>
                        ))}
                        <p>{elm?.title}</p>
                      </div>
                    </div>
                  )
                );
              })}
            {getAllSteps?.data?.data?.length >= 1 &&
              getAllSteps?.data?.data?.map((elm) => {
                return (
                  elm?.id === stepId && (
                    <div key={elm?.id} className="btn_cntnt">
                      <p>{elm?.bottomHeading}</p>
                    </div>
                  )
                );
              })}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h3 className="page_sec_head">
          ADC linker technology largely comprises of:
        </h3>
        <div className="service_diagram_2">
          <div className="dia_left">
            <div className="left_side_content">
              <div className="top_heads">
                <div className="head_left">
                  <h3>ADC Linker Technology</h3>
                </div>
                <div className="head_right">
                  <h3>Release Mechanism</h3>
                </div>
              </div>
              <div className="left_buttons">
                <div className="desc_btns">
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>Disulfied</button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        Designed to be cleaved through disulfied exchange with
                        an intracellular thiol, such as glutathione.
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>Hydrazone</button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        Designed to be cleaved through disulfied exchange with
                        an intracellular thiol, such as glutathione.
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>Theoeither</button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        Designed to be cleaved through disulfied exchange with
                        an intracellular thiol, such as glutathione.
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>Peptide</button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        Designed to be cleaved through disulfied exchange with
                        an intracellular thiol, such as glutathione.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_ser_chem">
            <div className="row">
              <div className="col-md-4">
                <div className="chem_images">
                  <img src={require("assets/chemical_1.png")} alt="chemical" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="chem_images">
                  <img src={require("assets/chemical_2.png")} alt="chemical" />
                </div>
              </div>
            </div>
            <div className="bottom_sem_content">
              <p>
                Chemical Structures of non-cleavable and cleavable linkers. (A)
                SMCC linkers. (B) Maleimidocaproyl linker. (C) Protease
                cleavable peptide- Based linker. (D)Reducible disulfide linker.
                (E) Acid-sensitive hydrazone linker.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service_bottom_section_chem">
        <div className="container-fluid">
          <div className="service_btn_content ser_bss">
            <p>
              As of 2021 among the 114 completed or ongoing human trials, there
              is a lack of diversification in themedicinal payloads utilized,
              with only 7 payload preparations reported, (4 additional trialsare
              ongoing with non-reported structures). Six of seven payload
              mixtures are derived fromnatural product sources, highlighting the
              value of natural products as cytotoxic payloadsfor ADC in research
              studies. Custom cytotoxic payloads comprise an active area of
              inquiry.
            </p>
          </div>
          <div className="row dds_cc ">
            <div className="col-md-6">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img src={require("assets/chemical_3.png")} alt="chemical" />
                  <p>
                    Trastuzumab emtansine (Kadcyla) <br /> for treatment of
                    Her2-positive breast cancer FDA-approved in 2013{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img src={require("assets/chemical_4.png")} alt="chemical" />
                  <p>
                    Trastuzumab emtansine (Kadcyla) <br /> for treatment of
                    Her2-positive breast cancer FDA-approved in 2013{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img src={require("assets/chemical_5.png")} alt="chemical" />
                  <p>
                    Trastuzumab emtansine (Kadcyla) <br /> for treatment of
                    Her2-positive breast cancer FDA-approved in 2013{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stepBtn = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];
