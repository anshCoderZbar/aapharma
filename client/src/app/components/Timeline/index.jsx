import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./timeline.css";
import { AllCarbohydrateTimeline } from "rest/service";

export const Timeline = () => {
  const allTimelines = AllCarbohydrateTimeline();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (allTimelines?.data?.data) {
      setId(allTimelines?.data?.data[0]?.id);
    }
  }, [allTimelines?.data?.data]);

  return (
    <section className="timeline">
      <Swiper slidesPerView={9} loop={false} className="time_vv">
        {allTimelines?.data?.data?.length >= 1 &&
          allTimelines?.data?.data?.map((elm, i) => {
            const classIndex = i % 10;
            return (
              <SwiperSlide key={i}>
                <span
                  onClick={() => setId(elm?.id)}
                  className={`ccrical-a ccir_${classIndex}`}
                ></span>
                <div className={`shape-chat _${classIndex}`}>
                  {elm?.description2 && !elm?.description && (
                    <time>{elm?.year}</time>
                  )}

                  {elm?.description && !elm?.description2 && (
                    <p>{elm?.description}</p>
                  )}
                  {elm?.description2 && !elm?.description && (
                    <p>{elm?.description2}</p>
                  )}

                  {elm?.description && !elm?.description2 && (
                    <time>{elm?.year}</time>
                  )}

                  {elm?.description && elm?.description2 && (
                    <>
                      <div className="top-div">
                        <p>{elm?.description}</p>
                        <time>{elm?.year}</time>
                      </div>
                      <div className="bottom-div bn-xs">
                        <time>{elm?.year}</time>
                        <p>{elm?.description2}</p>
                      </div>
                    </>
                  )}
                </div>
                {elm?.id === id && (
                  <picture className={`comp_img comp_${classIndex}`}>
                    <img src={elm?.image ? elm?.image : elm?.image2} />
                  </picture>
                )}
              </SwiperSlide>
            );
          })}
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "./timeline.css";

// export const Timeline = () => {
//   return (
//     <section class="timeline">
//       <Swiper slidesPerView={9} loop={false} className="time_vv">
//         <SwiperSlide>
//           <div className="shape-chat">
//             <p>Discovery of Oligosaccharide as Anti- infective Agents</p>
//             <time>1934</time>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _1">
//             <div className="top-div">
//               <p>
//                 Streptozocin Containing Glucosamine we Approvedfor the treatment
//                 iofpancreatic Tumors
//               </p>
//               <time>1982</time>
//             </div>
//             <div className="bottom-div bn-xs">
//               <time>1982</time>
//               <p>
//                 Nucleoside Analogues were Approved for the Treatment of
//                 Anti-viral and Anti-tumors
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _2">
//             <p>Discovery of Oligosaccharide as Anti- infective Agents</p>
//             <time>1976</time>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _3">
//             <time>2001</time>
//             <p>
//               Fondaparinux was Approved for the prevention of Throm- boembolic
//               Events
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _4">
//             <p>Nelarabine was Approved for The Treatment of Leukemia</p>
//             <time>2005</time>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _5">
//             <time>2008</time>
//             <p>
//               Sugammadex was Approvedfor the Treatment of Nervous System
//               Diseases
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _6">
//             <p>
//               Dapagliflozin Was Approvedas the First SGLT2 Inhibitorfor the
//               Treatment Of T2DM
//             </p>
//             <time>2012</time>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _7">
//             <time>2018</time>
//             <p>
//               Plazomicin was Approved asAminoglycoside for the Treatmentof
//               serious bacterial infections
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="shape-chat _8">
//             <p>Remdesivir was Approved for treatment of COVID-19</p>
//             <time>2012</time>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide></SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };
