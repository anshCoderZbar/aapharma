import React from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Services.css";
import {
  GetIsotopeAssessmentMutation,
  GetIsotopeBannerMutation,
  GetIsotopeButtonMutation,
  GetIsotopeDetailsMutation,
  GetIsotopeTableMutation,
} from "rest/service";

export default function Services1() {
  const getBanner = GetIsotopeBannerMutation();
  const getAssessment = GetIsotopeAssessmentMutation();
  const getTableData = GetIsotopeTableMutation();
  const getDetails = GetIsotopeDetailsMutation();
  const getButtons = GetIsotopeButtonMutation();
  return (
    <div className="services_1_page">
      <div className="service_top_sec">
        <Banner
          heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
          background={`linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)),url(${
            getBanner?.data?.data && getBanner?.data?.data?.image
          })`}
          extra="white_head isotope_banner"
        />
        <div className="container-fluid">
          <div className="service_desc">
            <p>
              {getAssessment?.data?.data &&
                getAssessment?.data?.data?.subheading}
            </p>
          </div>
          <div className="sevice_detail">
            <div className="container-fluid">
              <div className="row detail_b">
                <div className="col-sm-6 col-xl-4">
                  <div className="service_list_card">
                    <div className="service_list_card_body">
                      <h3>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.heading1}
                      </h3>
                      <ul>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.list1?.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                  <div className="service_list_card">
                    <div className="service_list_card_body">
                      <h3>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.heading2}
                      </h3>
                      <ul>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.list2?.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-4">
                  <div className="service_list_card">
                    <div className="service_list_card_body">
                      <h3>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.heading3}
                      </h3>
                      <ul>
                        {getAssessment?.data?.data &&
                          getAssessment?.data?.data?.list3?.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="table_outer">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="service_table">Element</th>
                  <th className="service_table">Atomic Number</th>
                  <th className="service_table">Parent Atom</th>
                  <th className="service_table">Stable Isotope</th>
                  <th className="service_table">
                    <div className="table_head">
                      <p className="mb-0 d-block w-100">Abundance</p>
                      <p className="mb-0 d-block w-100">(In Nature)</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {getTableData?.data?.data?.length >= 1 &&
                  getTableData?.data?.data?.map((elm) => {
                    return (
                      <tr className="service_table_body">
                        <td>{elm?.elements}</td>
                        <td>{elm?.atomicNumber}</td>
                        <td>{elm?.parentAtom}</td>
                        <td>{elm?.stableIsotope}</td>
                        <td>{elm?.abundance}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="service_desc">
            <h3>{getDetails?.data?.data && getDetails?.data?.data?.heading}</h3>
          </div>
          <div className="service_bottom_details">
            <div className=" serv_bhys row_rev_service">
              <div className="service_bottom_featured_img">
                <img
                  src={getDetails?.data?.data && getDetails?.data?.data?.image1}
                  alt="featured-image"
                />
              </div>
              <p
                className="service_bottom_desc"
                dangerouslySetInnerHTML={{
                  __html:
                    getDetails?.data?.data &&
                    getDetails?.data?.data?.description1,
                }}
              />
            </div>
            {/* <div className="row serv_bhys">
              <div className="col-lg-6">
                <div className="service_bottom_featured_img">
                  <img
                    src={
                      getDetails?.data?.data && getDetails?.data?.data?.image2
                    }
                    alt="featured-image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service_bottom_desc">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        getDetails?.data?.data &&
                        getDetails?.data?.data?.description2,
                    }}
                  />
                </div>
              </div>
            </div> */}
            <div className=" serv_bhys row_rev_service">
              <div className="service_bottom_featured_img left_flow">
                <img
                  src={getDetails?.data?.data && getDetails?.data?.data?.image2}
                  alt="featured-image"
                />
              </div>
              <p
                className="service_bottom_desc"
                dangerouslySetInnerHTML={{
                  __html:
                    getDetails?.data?.data &&
                    getDetails?.data?.data?.description2,
                }}
              />
            </div>
          </div>
          <div className="service_desc">
            <h3>{getButtons?.data?.data && getButtons?.data?.data?.heading}</h3>
          </div>
          <div className="service_desc_button">
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.firstButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.secondButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.thirdButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.fourthButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.fifthButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.sixthButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.seventhButton}
            </button>
            <button>
              {getButtons?.data?.data && getButtons?.data?.data?.eighthButton}
            </button>
          </div>
          <div className="service_desc">
            <p>
              {getButtons?.data?.data && getButtons?.data?.data?.subheading}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
