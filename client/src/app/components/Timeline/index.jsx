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
      <Swiper
        slidesPerView={1}
        loop={false}
        breakpoints={{
          470: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          991: {
            slidesPerView: 5,
          },
          1199: {
            slidesPerView: 7,
          },
          1300: {
            slidesPerView: 8,
          },
          1500: {
            slidesPerView: 9,
          },
        }}
        className="time_vv"
      >
        {allTimelines?.data?.data?.length >= 1 &&
          allTimelines?.data?.data?.map((elm, i) => {
            const classIndex = i % 10;
            return (
              <SwiperSlide key={i}>
                <span
                  onClick={() => setId(elm?.id)}
                  className={`ccrical-a  ccir_${classIndex}`}
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
                  <picture
                    className={`comp_img ${
                      classIndex % 2 === 0 ? "even_class" : "odd_class"
                    }  comp_${classIndex}`}
                  >
                    <img src={elm?.image ? elm?.image : elm?.image2} />
                  </picture>
                )}
                {/* {elm?.image && (
                  <picture
                    className={`comp_img comp_${
                      classIndex % 2 === 0 ? classIndex : ""
                    }`}
                  >
                    <img src={elm?.image} />
                  </picture>
                )} */}

                {/* {elm?.image2 && (
                  <picture
                    className={`comp_img comp_${
                      classIndex % 2 !== 0 ? classIndex : ""
                    }`}
                  >
                    <img src={elm?.image2} />
                  </picture>
                )} */}
              </SwiperSlide>
            );
          })}
        <SwiperSlide></SwiperSlide>
        <h2 className="mai"></h2>
      </Swiper>
    </section>
  );
};
