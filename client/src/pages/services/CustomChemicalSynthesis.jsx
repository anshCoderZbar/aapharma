import React, { useEffect, useRef, useState } from "react";

import "styles/Services.css";
import banner from "assets/page-banners/custom_chemical_synthesis_banner.jpg";
import {
  GetCustomChemicalSynthesisMutation,
  GetExpertiesIncludesMutation,
  GetSingleChemicalSynthesisMutation,
} from "rest/service";
import axios from "axios";
import { API_ENDPOINTS } from "rest/client/endpoints";

export default function CustomChemicalSynthesis() {
  const myRef = useRef(null);
  const getChemicalSynthesisMutation = GetCustomChemicalSynthesisMutation();
  const getSingleChemicalSynthesis = GetSingleChemicalSynthesisMutation();
  const getExpertiesIncludes = GetExpertiesIncludesMutation();
  const [active, setActive] = useState(null);
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    setActive(getChemicalSynthesisMutation?.data?.data[0]?.id);
  }, [getChemicalSynthesisMutation?.data?.data]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    if (active) {
      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}${API_ENDPOINTS.singleCustomChemicalSynthesis}`,
          { customchemicalsynthesisId: active },
          { signal }
        )
        .then((res) => {
          setInitialData(res?.data?.data);
        })
        .catch((err) => {
          return;
        });
    }
    return () => {
      abortController.abort();
    };
  }, [active]);

  const handleCardClick = (id) => {
    setActive(id);
    const formData = new FormData();
    formData.append(
      "customchemicalsynthesisId",
      id ? id : getChemicalSynthesisMutation?.data?.data[0]?.id
    );
    getSingleChemicalSynthesis?.mutate(formData);
    if (myRef.current) {
      const element = myRef.current;
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="custom_chemical_synthesis_page">
      <div className="container-fluid">
        <div className="chemical_top_sec">
          <h1 className="main_top_heading text-center">
            Custom Chemical Synthesis
          </h1>
          <div className="chemical_synthesis_card">
            {getChemicalSynthesisMutation?.data?.data?.map((elm) => {
              return (
                <div
                  onClick={() => handleCardClick(elm?.id)}
                  key={elm?.id}
                  className={`card_outer ${
                    active === elm?.id ? "chemical_card_active" : ""
                  }`}
                >
                  <div className="card_inner_body">
                    <img src={elm?.image} alt="icon" />
                    <p>{elm?.heading}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {(getSingleChemicalSynthesis?.data?.data || initialData) && (
            <div
              ref={myRef}
              key={getSingleChemicalSynthesis?.data?.data?.id}
              className={`${
                active === getSingleChemicalSynthesis?.data?.data?.id
                  ? "openAnimation"
                  : ""
              } service_description chem_desc`}
            >
              <p>
                {getSingleChemicalSynthesis?.data?.data?.description
                  ? getSingleChemicalSynthesis?.data?.data?.description
                  : initialData?.description}
              </p>
            </div>
          )}
        </div>
        <div
          className="custom_page_banner"
          style={{
            backgroundImage: `linear-gradient(rgba(42, 48, 114, 0.85), rgba(42, 48, 114, 0.85)),url(${banner})`,
          }}
        >
          <h2 className="main_top_heading text-white">
            {getExpertiesIncludes?.data?.data?.heading &&
              getExpertiesIncludes?.data?.data?.heading}
          </h2>
          <div className="lists_chemical">
            {getExpertiesIncludes?.data?.data?.expertiseList &&
              getExpertiesIncludes?.data?.data?.expertiseList
                ?.split("@@")
                ?.map((elm, i) => {
                  return (
                    <div key={i} className="chem_1">
                      <span>{elm}</span>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
