import React, { useEffect, useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetAdcLinker,
  GetAllTherapeuticsSteps,
  GetServiceImage,
  GetTherapeuticsBanner,
  GetTherapeuticsBottom,
  GetTherapeuticsSupport,
} from "rest/service";

export default function Services2() {
  const [stepId, setStepId] = useState();
  const getBanner = GetTherapeuticsBanner();
  const getSupportData = GetTherapeuticsSupport();
  const getAllSteps = GetAllTherapeuticsSteps();
  const getServiceImage = GetServiceImage();
  const getAdc = GetAdcLinker();
  const getBottom = GetTherapeuticsBottom();

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
          <div
            dangerouslySetInnerHTML={{
              __html:
                getSupportData?.data?.data?.description &&
                getSupportData?.data?.data?.description,
            }}
            className="service_btn_content"
          />
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
                        {elm?.heading.map((elm, i) => (
                          <h2 key={i}>{elm}</h2>
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
          {getAdc?.data?.data?.heading && getAdc?.data?.data?.heading}
        </h3>
        <div className="service_diagram_2">
          <div className="dia_left">
            <div className="left_side_content">
              <div className="top_heads">
                <div className="head_left">
                  <h3>
                    {getAdc?.data?.data?.titleLeft &&
                      getAdc?.data?.data?.titleLeft}
                  </h3>
                </div>
                <div className="head_right">
                  <h3>
                    {getAdc?.data?.data?.titleRight &&
                      getAdc?.data?.data?.titleRight}
                  </h3>
                </div>
              </div>
              <div className="left_buttons">
                <div className="desc_btns">
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>
                        {getAdc?.data?.data?.button1 &&
                          getAdc?.data?.data?.button1}
                      </button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        {getAdc?.data?.data?.button1Description &&
                          getAdc?.data?.data?.button1Description}
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>
                        {getAdc?.data?.data?.button2 &&
                          getAdc?.data?.data?.button2}
                      </button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        {getAdc?.data?.data?.button2Description &&
                          getAdc?.data?.data?.button2Description}
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>
                        {getAdc?.data?.data?.button3 &&
                          getAdc?.data?.data?.button3}
                      </button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        {getAdc?.data?.data?.button3Description &&
                          getAdc?.data?.data?.button3Description}
                      </p>
                    </div>
                  </div>
                  <div className="buttons_arr_des">
                    <div className="Disulfied-s">
                      <button>
                        {getAdc?.data?.data?.button4 &&
                          getAdc?.data?.data?.button4}
                      </button>
                    </div>
                    <div className="desc_bt">
                      <p>
                        {getAdc?.data?.data?.button4Description &&
                          getAdc?.data?.data?.button4Description}
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
                  <img
                    src={
                      getAdc?.data?.data?.imageLeft &&
                      getAdc?.data?.data?.imageLeft
                    }
                    alt="chemical"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="chem_images">
                  <img
                    src={
                      getAdc?.data?.data?.imageRight &&
                      getAdc?.data?.data?.imageRight
                    }
                    alt="chemical"
                  />
                </div>
              </div>
            </div>
            <div className="bottom_sem_content">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    getAdc?.data?.data?.bottomDescription &&
                    getAdc?.data?.data?.bottomDescription,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="service_bottom_section_chem">
        <div className="container-fluid">
          <div className="service_btn_content ser_bss">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  getBottom?.data?.data?.topDescription &&
                  getBottom?.data?.data?.topDescription,
              }}
            />
          </div>
          <div className="row dds_cc ">
            <div className="col-md-6">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img
                    src={
                      getBottom?.data?.data?.imageLeft &&
                      getBottom?.data?.data?.imageLeft
                    }
                    alt="chemical"
                  />
                  <div
                    className="scc_jn"
                    dangerouslySetInnerHTML={{
                      __html:
                        getBottom?.data?.data?.imageLeftDescription &&
                        getBottom?.data?.data?.imageLeftDescription,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img
                    src={
                      getBottom?.data?.data?.imageRight &&
                      getBottom?.data?.data?.imageRight
                    }
                    alt="chemical"
                  />
                  <div
                    className="scc_jn"
                    dangerouslySetInnerHTML={{
                      __html:
                        getBottom?.data?.data?.imageRightDescription &&
                        getBottom?.data?.data?.imageRightDescription,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="chem_btm_img">
                <div className="image_des">
                  <img
                    src={
                      getBottom?.data?.data?.imageBottom &&
                      getBottom?.data?.data?.imageBottom
                    }
                    alt="chemical"
                  />
                  <div
                    className="scc_jn"
                    dangerouslySetInnerHTML={{
                      __html:
                        getBottom?.data?.data?.imageBottomDescription &&
                        getBottom?.data?.data?.imageBottomDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
