import React from "react";
import { GetResourcesGuides, GetResourcesHeading } from "rest/resources";

import "styles/Resources.css";

export default function Resources() {
  const getHeading = GetResourcesHeading();
  const getGuides = GetResourcesGuides();
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
          <button>Publicly Available Information</button>
          <button>Government</button>
          <button>Patents</button>
          <button>Chemistry</button>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="resources_img">
              <img src={require("assets/resources_img.png")} alt="resources" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="resource_card_details">
              {data?.map((elm) => {
                return (
                  <div className="resources_cards">
                    <div className="row">
                      <div className="col-8">
                        <div className="resource_left_content">
                          <h3>American Chemical Society</h3>
                          <p>
                            ACS is one of the world’s largest scientific
                            organizations with more than 150,000 members in 140+
                            countries.
                          </p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="resource_right_content">
                          <p>Visit</p>
                          <a href="#" target="_blank" rel="noreferrer">
                            acs.org
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
            href={getGuides?.data?.data?.pdf1 && getGuides?.data?.data?.pdf1}
            download="download"
            target="_blank"
          >
            <button>
              {getGuides?.data?.data?.pdf1text &&
                getGuides?.data?.data?.pdf1text}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

const data = [1, 2, 3, 4, 5, 6];
