import React, { useState } from "react";

import { Banner } from "app/components/Ui/Banner";
import { SmallMoleculesCard } from "app/common/services/SmallMoleculesCard";

import "styles/Services.css";
import {
  GetAllSmallMoleculeTabs,
  GetHTSMutation,
  GetLeadDevelopmentMutation,
  GetSARMutation,
  GetSBDDMutation,
  GetScaffHoppingMutation,
  GetSmallMoleculeBannerMutation,
} from "rest/service";
import { useEffect } from "react";

export default function SmallMoleculesDrugDiscovery() {
  const [tabId, setTabId] = useState();

  const getBanner = GetSmallMoleculeBannerMutation();
  const getHTS = GetHTSMutation();
  const getSDBB = GetSBDDMutation();
  const getSAR = GetSARMutation();
  const getLeadDevelopment = GetLeadDevelopmentMutation();
  const getScaffoldHopping = GetScaffHoppingMutation();
  const getTabs = GetAllSmallMoleculeTabs();

  console.log();

  useEffect(() => {
    if (getTabs?.data?.data) {
      setTabId(getTabs?.data?.data[0]?.id);
    }
  }, [getTabs?.data?.data]);

  return (
    <div className="small_molecules_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        background={`linear-gradient(#2A3072, #2A3072)`}
        subMenu="Medicinal Chemistry"
        description={getBanner?.data?.data && getBanner?.data?.data?.subheading}
        extra="white_head small_page_banner"
      />
      <div className="container-fluid">
        <div className="main_small_page">
          <h1 className="main_top_heading text-center ">
            {getHTS?.data?.data && getHTS?.data?.data?.heading}
          </h1>
          <p
            className="main_small_content"
            dangerouslySetInnerHTML={{
              __html: getHTS?.data?.data && getHTS?.data?.data?.description,
            }}
          />
        </div>
        <div className="small_page_btns_sec">
          <h4 className="small_page_heading">Services offered:</h4>
          <div className="small_page_buttons">
            <button className="primary_buttton">
              {getHTS?.data?.data && getHTS?.data?.data?.FirstButton}
            </button>
            <button className="primary_buttton">
              {getHTS?.data?.data && getHTS?.data?.data?.SecondButton}
            </button>
            <button className="primary_buttton">
              {getHTS?.data?.data && getHTS?.data?.data?.ThirdButton}
            </button>
            <button className="primary_buttton">
              {getHTS?.data?.data && getHTS?.data?.data?.FourthButton}
            </button>
            <button className="primary_buttton">
              {getHTS?.data?.data && getHTS?.data?.data?.FifthButton}
            </button>
          </div>
        </div>
      </div>
      <div className="small_feature_section  bg-white">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="small_main_image small_main_2_img">
                <img src={getHTS?.data?.data && getHTS?.data?.data?.Image1} />
                <h4>
                  {getHTS?.data?.data && getHTS?.data?.data?.ImageSubHeading}
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="small_main_image small_main_2_img">
                <img src={getHTS?.data?.data && getHTS?.data?.data?.Image2} />
                <h4>
                  {getHTS?.data?.data && getHTS?.data?.data?.ImageSubHeading2}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid hrshadow ">
        <hr />
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading={getSDBB?.data?.data && getSDBB?.data?.data?.heading}
            mainDescription={
              getSDBB?.data?.data && getSDBB?.data?.data?.description
            }
            buttons={getSDBB?.data?.data && getSDBB?.data?.data?.list}
            image={getSDBB?.data?.data && getSDBB?.data?.data?.image}
          />
        </div>
      </div>
      <div className="container-fluid hrshadow ">
        <hr />
      </div>
      <div className="small_feature_section  bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading={getSAR?.data?.data && getSAR?.data?.data?.heading}
            mainDescription={
              getSAR?.data?.data && getSAR?.data?.data?.description
            }
            buttons={getSAR?.data?.data && getSAR?.data?.data?.list}
            image={getSAR?.data?.data && getSAR?.data?.data?.image}
            extraClass="flex-row-reverse"
          />
        </div>
      </div>
      <div className="container-fluid hrshadow ">
        <hr />
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            secondHead={
              getScaffoldHopping?.data?.data &&
              getScaffoldHopping?.data?.data?.heading
            }
            description={
              getScaffoldHopping?.data?.data &&
              getScaffoldHopping?.data?.data?.description
            }
            buttons={
              getScaffoldHopping?.data?.data &&
              getScaffoldHopping?.data?.data?.list
            }
            image={
              getScaffoldHopping?.data?.data &&
              getScaffoldHopping?.data?.data?.image
            }
          />
        </div>
      </div>
      <div className="container-fluid hrshadow ">
        <hr />
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading={
              getLeadDevelopment?.data?.data &&
              getLeadDevelopment?.data?.data?.heading
            }
            mainDescription={
              getLeadDevelopment?.data?.data &&
              getLeadDevelopment?.data?.data?.description
            }
            buttons={
              getLeadDevelopment?.data?.data &&
              getLeadDevelopment?.data?.data?.list
            }
            image={
              getLeadDevelopment?.data?.data &&
              getLeadDevelopment?.data?.data?.image
            }
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="process_box">
          <div className="process_inner_box mt-0">
            <p>
              {getLeadDevelopment?.data?.data &&
                getLeadDevelopment?.data?.data?.subheading}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="moleucles_tab_buttons">
          {getTabs?.data?.data?.length >= 1 &&
            getTabs?.data?.data?.map((elm, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setTabId(elm?.id)}
                  className={`${
                    tabId === elm?.id ? "molecules_tab_active" : ""
                  }`}
                >
                  {elm?.title}
                </button>
              );
            })}
        </div>
        <div className="molecules_tab_content">
          {getTabs?.data?.data?.length >= 1 &&
            getTabs?.data?.data?.map((tabs, i) => {
              return (
                tabId === tabs?.id && (
                  <div key={i} className="row tab_molecule_row ">
                    <div className="col-lg-4">
                      <div className="molecule_tab_img">
                        <img src={tabs?.image} />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div
                        className="molecule_tab_content"
                        dangerouslySetInnerHTML={{ __html: tabs?.description }}
                      />
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
}
