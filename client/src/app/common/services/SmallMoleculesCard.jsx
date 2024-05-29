import React from "react";

import "styles/Services.css";

export const SmallMoleculesCard = (props) => {
  return (
    <div className="small_molecule_card">
      <h1 className="main_top_heading text-center">{props?.heading}</h1>
      {props?.mainDescription && (
        <div className="main_small_page small_main_desc">
          <p>{props?.mainDescription}</p>
        </div>
      )}
      <div className={`row small_card_outer ${props?.extraClass}`}>
        <div className="col-lg-6">
          <div className="small_card_body main_small_page">
            <p>{props?.description}</p>
            <div className="small_page_btns_sec">
              <h4 className="small_page_heading">Services offered:</h4>
              <div className="small_card_btns">
                {props?.buttons &&
                  props?.buttons?.map((elm, i) => (
                    <button key={i} className="primary_buttton">
                      {elm}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="drug_card_image">
            <img src={props?.image} />
          </div>
        </div>
      </div>
    </div>
  );
};
