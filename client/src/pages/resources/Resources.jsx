import React, { useEffect, useState } from "react";
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
          resourcesTabs?.data?.data?.map((tabs) => {
            return (
              tabs?.id === tabId && (
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resources_img">
                      <img src={tabs?.image} alt="resources" />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource_card_details">
                      {tabs?.combinedData?.length >= 1 &&
                        tabs?.combinedData?.map((links) => {
                          return (
                            <div className="resources_cards">
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
                                      Click Here
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
