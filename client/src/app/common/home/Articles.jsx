import React from "react";
import { MoveUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { LatestArticles } from "app/mock/home";

import "swiper/css/pagination";
import { AllArticlesMutation } from "rest/home";

export const Articles = () => {
  const allArticles = AllArticlesMutation();
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      loop={true}
      pagination={{ clickable: true }}
    >
      {allArticles?.data?.data?.length >= 1 &&
        allArticles?.data?.data?.map((article, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="row align-items-center mt-3">
                <div className="col-lg-6">
                  <div className="articles_content">
                    <h3>{article?.heading}</h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: article?.description }}
                    />
                    <button className="primary_btn_outline d-flex">
                      Read More
                      <span>
                        <MoveUpRight />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="article_img">
                    <img src={article?.featuredImage} alt="articleImg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      <button className="primary_buttton btn_papers">Additional Papers</button>
    </Swiper>
  );
};
