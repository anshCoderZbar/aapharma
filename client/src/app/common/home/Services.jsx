import React, { useEffect, useState } from "react";

import { GetHomeAddServices } from "rest/home";

export const Services = () => {
  const getAllServices = GetHomeAddServices();

  const [servideBg, setServiceBg] = useState("");
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setServiceBg(
      `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.featuredImage}`
    );
    setIcon(
      `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.icon}`
    );
  }, [getAllServices?.data?.data]);

  return (
    <>
      <div className="service_card">
        <ul>
          {getAllServices?.data?.data?.slice(0, 6).map((data, i) => {
            return (
              <li
                key={i}
                onMouseOver={() => {
                  setServiceBg(
                    `${getAllServices?.data?.baseUrl}/${data?.featuredImage}`
                  );
                  setIcon(`${getAllServices?.data?.baseUrl}/${data?.icon}`);
                }}
                onMouseLeave={() => {
                  setServiceBg(
                    `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.featuredImage}`
                  );
                  setIcon(
                    `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.icon}`
                  );
                }}
              >
                {data?.heading}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="service_img">
        <div className="position-relative vs_jj">
          <img src={servideBg} alt="service_bg" className="servic_bg_imag" />
          <div className="position-absolute service_icon">
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
