import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GetAllResourcesTabs,
  GetResourcesGuides,
  GetResourcesHeading,
} from "rest/resources";

import "styles/Resources.css";

export default function Resources() {
  const getHeading = GetResourcesHeading();
  const resourcesTabs = GetAllResourcesTabs();
  const getGuides = GetResourcesGuides();

  const [tabId, setTabId] = useState(-1);

  useEffect(() => {
    if (resourcesTabs?.data?.data) {
      setTabId(resourcesTabs?.data?.data[0]?.id);
    }
  }, [resourcesTabs?.data?.data]);

  return (
    <div className="resources_page">
      <div className="container-fluid">
        <div className="bread_crup">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li>
              <Link className="bread_active" to="/resources">
                resources
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="main_top_heading text-center">
          {getHeading?.data?.data?.heading && getHeading?.data?.data?.heading}
        </h1>
        <p
          className="resources_desc"
          dangerouslySetInnerHTML={{
            __html:
              getHeading?.data?.data?.description &&
              getHeading?.data?.data?.description,
          }}
        />
        <div className="resources_btns">
          {resourcesTabs?.data?.data?.length >= 1 &&
            resourcesTabs?.data?.data?.map((elm) => {
              return (
                <button
                  className={`${
                    elm?.id === tabId ? "resource_btn_active" : ""
                  }`}
                  onClick={() => setTabId(elm?.id)}
                >
                  {elm?.tabHeading}
                </button>
              );
            })}
        </div>
        {resourcesTabs?.data?.data?.length >= 1 &&
          resourcesTabs?.data?.data?.map((tabs, i) => {
            return (
              tabs?.id === tabId && (
                <div
                  className={`row ${i % 2 === 0 ? "flex-row" : "flex-column"} `}
                >
                  <div className={`${i % 2 === 0 ? "col-lg-5" : "col-lg-12"}`}>
                    <div
                      className={`resources_img ${
                        i % 2 === 0 ? "" : "resources_img_2"
                      }`}
                    >
                      <img src={tabs?.image} alt="resources" />
                    </div>
                  </div>
                  <div className={`${i % 2 === 0 ? "col-lg-7" : "col-lg-12"}`}>
                    <div
                      className={`resource_card_details ${
                        i % 2 === 0 ? "" : "flex-row"
                      }`}
                    >
                      {tabs?.combinedData?.length >= 1 &&
                        tabs?.combinedData?.map((links, index) => {
                          return (
                            <div
                              key={index}
                              className={`resources_cards ${
                                i % 2 === 0 ? "" : "res_buh"
                              }`}
                            >
                              <div className="row">
                                <div className="col-8">
                                  <div className="resource_left_content">
                                    <h3>{links?.heading}</h3>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: links?.description,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="resource_right_content">
                                    <p>Visit</p>
                                    <a
                                      href={links?.link}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {new URL(links?.link)?.host.replace(
                                        /(https?:\/\/)?(www.)?/i,
                                        ""
                                      )}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        <div className="resource_bottom_section">
          <h2 className="main_top_heading text-center">
            {getGuides?.data?.data?.heading && getGuides?.data?.data?.heading}
          </h2>
        </div>
        <div className="resources_btns resources_btn_sec">
          <a
            href={getGuides?.data?.data?.pdf1 && getGuides?.data?.data?.pdf1}
            download="download"
            target="_blank"
          >
            <button>
              {getGuides?.data?.data?.pdf1text &&
                getGuides?.data?.data?.pdf1text}
            </button>
          </a>
          <a
            href={getGuides?.data?.data?.pdf2 && getGuides?.data?.data?.pdf2}
            download="download"
            target="_blank"
          >
            <button>
              {getGuides?.data?.data?.pdf2text &&
                getGuides?.data?.data?.pdf2text}
            </button>
          </a>
          <a
            href={getGuides?.data?.data?.pdf3 && getGuides?.data?.data?.pdf3}
            download="download"
            target="_blank"
          >
            <button>
              {getGuides?.data?.data?.pdf3text &&
                getGuides?.data?.data?.pdf3text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
