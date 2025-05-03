// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { GetHomeAddServices } from "rest/home";

// export const Services = () => {
//   const getAllServices = GetHomeAddServices();

//   const [servideBg, setServiceBg] = useState("");
//   // const [icon, setIcon] = useState("");

//   useEffect(() => {
//     setServiceBg(
//       `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.featuredImage}`
//     );
//     // setIcon(
//     //   `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.icon}`
//     // );
//   }, [getAllServices?.data?.data]);

//   return (
//     <>
//       <div className="service_card">
//         <ul>
//           {getAllServices?.data?.data?.slice(0, 6).map((data, i) => {
//             return (
//               <Link to={data?.url} style={{ textDecoration: "none" }}>
//                 <li
//                   key={i}
//                   onMouseOver={() => {
//                     setServiceBg(
//                       `${getAllServices?.data?.baseUrl}/${data?.featuredImage}`
//                     );
//                     // setIcon(`${getAllServices?.data?.baseUrl}/${data?.icon}`);
//                   }}
//                   onMouseLeave={() => {
//                     setServiceBg(
//                       `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.featuredImage}`
//                     );
//                     // setIcon(
//                     //   `${getAllServices?.data?.baseUrl}/${getAllServices?.data?.data[0]?.icon}`
//                     // );
//                   }}
//                 >
//                   {data?.heading}
//                 </li>
//               </Link>
//             );
//           })}
//         </ul>
//       </div>
//       <div className="service_img">
//         {/* <div className="position-relative vs_jj"> */}
//         <div className="position-relative dsscds">
//           <img src={servideBg} alt="service_bg" className="servic_bg_imag" />
//           {/* <div className="position-absolute service_icon">
//             <img src={icon} alt="icon" />
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GetHomeAddServices } from "rest/home";

export const Services = () => {
  const getAllServices = GetHomeAddServices();
  const [servideBg, setServiceBg] = useState("");
  const [hoverIndex, setHoverIndex] = useState(0);

  const services = getAllServices?.data?.data || [];
  const baseUrl = getAllServices?.data?.baseUrl;

  useEffect(() => {
    if (services.length === 0) return;

    setServiceBg(`${baseUrl}/${services[0]?.featuredImage}`);

    const interval = setInterval(() => {
      setHoverIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services]);

  useEffect(() => {
    if (services.length > 0) {
      setServiceBg(`${baseUrl}/${services[hoverIndex]?.featuredImage}`);
    }
  }, [hoverIndex, services]);

  return (
    <>
      <div className="service_card">
        <ul>
          {services.slice(0, 6).map((data, i) => (
            <Link key={i} to={data?.url} style={{ textDecoration: "none" }}>
              <li
                onMouseOver={() => {
                  setServiceBg(`${baseUrl}/${data?.featuredImage}`);
                  setHoverIndex(i);
                }}
                onMouseLeave={() =>
                  setServiceBg(
                    `${baseUrl}/${services[hoverIndex]?.featuredImage}`
                  )
                }
                style={{
                  backgroundColor: hoverIndex === i ? "#34caff" : "#fff",
                  color: hoverIndex === i ? "#fff" : "#000",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                {data?.heading}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="service_img">
        <div className="position-relative dsscds">
          <img src={servideBg} alt="service_bg" className="servic_bg_imag" />
        </div>
      </div>
    </>
  );
};
