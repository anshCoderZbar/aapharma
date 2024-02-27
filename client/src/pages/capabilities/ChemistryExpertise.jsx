import React, { useEffect, useState } from "react";

import { Banner } from "app/components/Ui/Banner";

import "styles/Capabilities.css";
import {
  GetChemistryBannerMutation,
  GetChemistryTabsMutation,
} from "rest/capabilities";

export default function ChemistryExpertise() {
  const getBanner = GetChemistryBannerMutation();
  const getTabs = GetChemistryTabsMutation();

  const [tabsData, setTabsData] = useState("");

  useEffect(() => {
    if (getTabs?.data?.data) {
      setTabsData(getTabs?.data?.data[0]);
    }
  }, [getTabs?.data?.data]);

  console.log(tabsData);

  return (
    <div className="chemistry_expertise_page">
      <Banner
        heading={
          getBanner?.data?.data?.heading && getBanner?.data?.data?.heading
        }
        description={
          getBanner?.data?.data?.description &&
          getBanner?.data?.data?.description
        }
        extra="chemistry_banner"
        background={`url(${
          getBanner?.data?.data?.image && getBanner?.data?.data?.image
        })`}
      />
      <div className="experties_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="experties_filter_cover">
                <div className="experties_left_filter experties_filter_scroll">
                  {getTabs?.data?.data?.length >= 1 &&
                    getTabs?.data?.data?.map((data, i) => {
                      return (
                        <div
                          key={i}
                          className={`filter_btn ${
                            tabsData?.id === data?.id
                              ? "filter_btn_active_bss"
                              : ""
                          }`}
                        >
                          <button onClick={() => setTabsData(data)}>
                            {data?.heading?.length > 25
                              ? `${data?.heading.slice(0, 25)}...`
                              : data?.heading}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {
                <div className="experties_filter_cover filte_cont">
                  <div className="experties_content experties_filter_scroll">
                    <p className="exterties_btn_head">
                      {tabsData?.heading && tabsData?.heading}
                    </p>
                    <div
                      className="expertinesa_inner_content"
                      dangerouslySetInnerHTML={{
                        __html: tabsData?.description && tabsData?.description,
                      }}
                    />
                    {/* <div className="experties_filter_content">
                      <div className="expertinesa_inner_content">
                        <div className="chemical_experties_img">
                          <img
                            src={require("assets/chemical_experties.png")}
                            alt="chemical molecule"
                          />
                        </div>
                        <div className="expertinesa_main_content">
                          <h3>
                            Oleanane as an example of a natural triterpenoid.
                          </h3>
                          <p className="experties_para">
                            Triterpenes, such as oleanane, figure 1, are a class
                            of chemical compounds with a carbon skeleton based
                            on six isoprene units which are derived
                            biossynthetically from the acyclic C30 hydrocarbon,
                            squalene; they may also be thought of as consisting
                            of three terpene units. Triterpenoids are
                            functionalized triterpenes and are widely
                            distributed in nature, they can be found in animals,
                            plants and fungi and all produce triterpenes,
                            including squalene, the precursor to all steroids.
                          </p>
                        </div>
                      </div>
                      <p className="experties_para">
                        Triterpenoids are very interesting from a chemical point
                        of view since they have a variety of functional groups
                        as well as from a pharmaceutical point of view since
                        they possess a rich pharmacology (e.g. oleanolic acid,
                        figure 1) with several pentacyclic motifs.
                      </p>
                    </div>
                    <div className="experties_filter_content ">
                      <div className="expertinesa_inner_content">
                        <div className="chemical_experties_img">
                          <img
                            src={require("assets/chemical_experties.png")}
                            alt="chemical molecule"
                          />
                        </div>
                        <div className="expertinesa_main_content">
                          <h3>
                            Oleanolic acid. It exhibits antitumor and antiviral
                            properties.
                          </h3>
                          <p className="experties_para">
                            Biosynthesis of triterpenoids in cells involves a
                            handful of enzymes and can be divided into four
                            stages. The formation of geranyl diphosphate from
                            isopentenyl diphosphate units, formation of farnesyl
                            diphosphate which is then converted to squalene and
                            epoxysqualene. In the last stage, epoxysqualene is
                            cyclized to the triterpenoid. This complicated
                            pathway shows that it’s a challenging task for a
                            synthetic chemist to synthesize triterpenoids in a
                            laboratory setting.
                          </p>
                        </div>
                      </div>
                      <p className="experties_para">
                        The main synthetic strategies described in literature
                        for pentacyclic triterpenes are:
                      </p>
                      <div className="experties_conent_btns">
                        <button className="primary_btn_outline">
                          (a) AB + DE ABCDE
                        </button>
                        <button className="primary_btn_outline">
                          (b) BC ABC ABC(E) ABCDE
                        </button>
                        <button className="primary_btn_outline">
                          (c) CDE BCDE ABCDE
                        </button>
                        <button className="primary_btn_outline">
                          (d) D(E) ABCD(E) via polyene cyclization ( ABCDE)
                        </button>
                      </div>
                    </div>
                    <div className="experties_filter_content">
                      <div className="expertinesa_inner_content">
                        <div className="chemical_experties_img">
                          <img
                            src={require("assets/chemical_experties.png")}
                            alt="chemical molecule"
                          />
                        </div>
                        <div className="expertinesa_main_content">
                          <h3>
                            Oleanane as an example of a natural triterpenoid.
                          </h3>
                          <p className="experties_para">
                            Triterpenes, such as oleanane, figure 1, are a class
                            of chemical compounds with a carbon skeleton based
                            on six isoprene units which are derived
                            biossynthetically from the acyclic C30 hydrocarbon,
                            squalene; they may also be thought of as consisting
                            of three terpene units. Triterpenoids are
                            functionalized triterpenes and are widely
                            distributed in nature, they can be found in animals,
                            plants and fungi and all produce triterpenes,
                            including squalene, the precursor to all steroids.
                          </p>
                        </div>
                      </div>
                      <p className="experties_para">
                        Triterpenoids are very interesting from a chemical point
                        of view since they have a variety of functional groups
                        as well as from a pharmaceutical point of view since
                        they possess a rich pharmacology (e.g. oleanolic acid,
                        figure 1) with several pentacyclic motifs.
                      </p>
                    </div> */}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonData = [
  {
    heading: "Triterpenoids",
  },
  {
    heading: "Tripeptides",
  },
  {
    heading: "Quinolones",
  },
  {
    heading: "Quinolines",
  },
  {
    heading: "carbohydrates",
  },
  {
    heading: "substitude benzofurans",
  },
  {
    heading: "benzazapines",
  },
  {
    heading: "biguanide",
  },
  {
    heading: "Example  of a multi-step Example of a multi-step",
  },
  {
    heading: "Patents",
  },
  {
    heading: "Triterpenoids",
  },
  {
    heading: "Tripeptides",
  },
  {
    heading: "Quinolones",
  },
  {
    heading: "Quinolines",
  },
  {
    heading: "carbohydrates",
  },
];
