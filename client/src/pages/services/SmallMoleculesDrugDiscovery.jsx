import React from "react";

import { Banner } from "app/components/Ui/Banner";
import { SmallMoleculesCard } from "app/common/services/SmallMoleculesCard";

import "styles/Services.css";
import {
  GetHTSMutation,
  GetLeadDevelopmentMutation,
  GetSARMutation,
  GetSBDDMutation,
  GetSmallMoleculeBannerMutation,
} from "rest/service";

export default function SmallMoleculesDrugDiscovery() {
  const getBanner = GetSmallMoleculeBannerMutation();
  const getHTS = GetHTSMutation();
  const getSDBB = GetSBDDMutation();
  const getSAR = GetSARMutation();
  const getLeadDevelopment = GetLeadDevelopmentMutation();
  return (
    <div className="small_molecules_page">
      <Banner
        heading={getBanner?.data?.data && getBanner?.data?.data?.heading}
        background={`linear-gradient(#2A3072, #2A3072)`}
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
      <div className="small_feature_section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="small_main_image">
                <img src={getHTS?.data?.data && getHTS?.data?.data?.Image1} />
                <h4>
                  {getHTS?.data?.data && getHTS?.data?.data?.ImageSubHeading}
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="small_main_image small_main_2_img">
                <img src={getHTS?.data?.data && getHTS?.data?.data?.Image2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading={getSDBB?.data?.data && getSDBB?.data?.data?.heading}
            description={
              getSDBB?.data?.data && getSDBB?.data?.data?.description
            }
            buttons={getSDBB?.data?.data && getSDBB?.data?.data?.list}
            image={getSDBB?.data?.data && getSDBB?.data?.data?.image}
          />
        </div>
      </div>
      <div className="small_feature_section">
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
              Preparing compounds fast and efficiently requires deep expertise
              in a wide range of chemical transformations.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="moleucles_tab_buttons">
          <button className="molecules_tab_active">
            Heterocyclic Chemistry
          </button>
          <button>Transition Metal-Mediated Reactions</button>
          <button>Specialize Purpose Reactions</button>
          <button>Specialized Purpose Compounds</button>
        </div>
        <div className="molecules_tab_content">
          <div className="row tab_molecule_row ">
            <div className="col-lg-4">
              <div className="molecule_tab_img">
                <img src={require("assets/small_page_img6.png")} />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="molecule_tab_content">
                <p>
                  Synthesis and decoration of C-, N-, O- and S-containing
                  heterocycles
                </p>
                <p>
                  Synthesis and derivatizations of fused-heterocyclic systems
                </p>
                <p>
                  Saturated heterocyclic systems with C-N, C-O and C-P bonds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
