import React from "react";

import { Banner } from "app/components/Ui/Banner";
import { SmallMoleculesCard } from "app/common/services/SmallMoleculesCard";

import "styles/Services.css";

export default function SmallMoleculesDrugDiscovery() {
  return (
    <div className="small_molecules_page">
      <Banner
        heading="Small Molecule Drug Discovery"
        background={`linear-gradient(#2A3072, #2A3072)`}
        description="AAPharmaSyn supports drug discovery process across multiple stages of drug discovery."
        extra="white_head small_page_banner"
      />
      <div className="container-fluid">
        <div className="main_small_page">
          <h1 className="main_top_heading text-center ">
            High-Throughput Screening (HTS)
          </h1>
          <p className="main_small_content">
            is a in drug discovery and related fields of research. I-Jsing
            robotics and the appropriate software. high-throughput screening
            allows a ræearcher to quickly conduct large numbers of in vitro
            assays against large libraries of distinct chemical entities to
            identify active compounds, that modulate a molecular pathway. The
            collection of total HTS •hits" represents a starting point for HTS
            triage. HTS triage involves the classification, or prioritization,
            of hits from screening campaigns into compounds that are likely to
            survive further investigation. those that probably have no chance of
            succeeding either as probes and those that fall into an intermediate
            classificatim where intervention could make a significant difference
            in their survival. Compounds or series of compounds are prioritized
            based on bicchemical (promiscuity. structural alerts, etc.) and
            physciochemical (MW cLogP, solubility, structural complexity.
            rule-of-5-compliance. etc). The outcome Of HTS is the identification
            Of 1-3 compounds / series for further manipulation via synthesis or
            catalog purchases and would the initiation Of lead development or
            could starting points for drug design and for understanding the
            interaction or role Of a particular bicchemical in biology.
          </p>
        </div>
        <div className="small_page_btns_sec">
          <h4 className="small_page_heading">Services offered:</h4>
          <div className="small_page_buttons">
            <button className="primary_buttton">HTS data analysis</button>
            <button className="primary_buttton">IP due</button>
            <button className="primary_buttton">
              Synthesis of selected actives
            </button>
            <button className="primary_buttton">
              Exploration of synthetic
            </button>
            <button className="primary_buttton">
              Fcxused Library synthesis Limited synthesis
            </button>
          </div>
        </div>
      </div>
      <div className="small_feature_section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="small_main_image">
                <img src={require("assets/small_page_img1.png")} />
                <h4>
                  Representative visualization of the HTS triage process to
                  generate the Qualified Hit List
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="small_main_image small_main_2_img">
                <img src={require("assets/small_page_img2.png")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading="Structure Based Drug Design (SBDD)"
            description="is a specific, efficient, and rapid process for lead discovery and
            optimization when the three—dimensional structure of the
            biological target is obtained through methods such as x-ray
            crystallography or NMR spectroscopy because it deals with the 3D
            structure of a target protein and knowledge about the disease at
            the molecular level. Among the relevant computational techniques,
            structure-based virtual screening (SBVS), molecular docking, and
            molecular dynamics (MD) simulations are the most common methods
            used in SBDD. These methods have numerous applications in the
            analysis of binding energetics, ligand—protein interactions, and
            evaluation of the conformational changes occurring during the docking process. This information is
            integrated to predict high binding affinity compounds which are
            subsequently prepared synthetically."
            buttons={[
              "Assistance with determination of scope of potential SAR",
              "Utilization of parallel synthesis techniques to broadly explore SAR",
              "Development of new synthetic methods",
              "Explorations of chemical stability",
            ]}
            image={require("assets/small_page_img3.png")}
          />
        </div>
      </div>
      <div className="small_feature_section">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading="Structure Activity Relationship (SAR)"
            mainDescription="library development. A structure—activity relationship (SAR) is the relationship between the chemical or 3D structure Of a molecule and its biological activity. The analysis Of SAR enables the
            determination of the chemical group or substitution responsible for a biological effect. The developed understanding allows further modulation of the effect of a bioactive compound by changing
            its chemical structure. Chemical synthesis is used to insert new chemical groups and test the modifications for their biological effects."
            buttons={[
              "Assistance w ith establishment of pre-lead criteria",
              "Full SAR development",
              "Optimization of: (a) Potency (b) Animal efficacy (c) PK",
              "Assistance with salt selection",
            ]}
            image={require("assets/small_page_img4.png")}
            extraClass="flex-row-reverse"
          />
        </div>
      </div>
      <div className="small_feature_section bg-white">
        <div className="container-fluid">
          <SmallMoleculesCard
            heading="Lead Development"
            mainDescription="requires Of a from HTS Ereening or swnilar with ptential to made into a chical candidate. Once identifiød. the chemical structure Of the Ead cornpound is
            chemicary mcdified to improve potency. selectivity or pharmacokinetic (PK) parameters"
            buttons={[
              "Scale up of key materials materials to support early prcduct development needs",
              "Resolution of synthetic issues",
              "Fine tuning of physicochemical properties (solubility, permeability, ADME properties, etc.)",
              "Development of synthetic strategies to address side effect data (tox or pharmacologic)",
              "Prepare back-up candidates",
            ]}
            image={require("assets/small_page_img5.png")}
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
