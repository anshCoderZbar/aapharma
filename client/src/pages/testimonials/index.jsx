import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "styles/Pages.css";
import { Autoplay } from "swiper/modules";
import { AllTestimonialMutation2, GetTestimonialPageHeading } from "rest/about";

export const TestimonialsPage = () => {
  const allTestimonial = AllTestimonialMutation2();
  const getHeadings = GetTestimonialPageHeading();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (allTestimonial?.data?.data) {
      setSelected(allTestimonial?.data?.data[0]?.id);
    }
  }, [allTestimonial?.data?.data]);

  const filterTestimonial = allTestimonial?.data?.data?.filter((elm) => {
    return elm.id === selected;
  });

  return (
    <div className="testimonial_page">
      <h1 className="main_top_heading">
        {getHeadings?.data?.data?.heading && getHeadings?.data?.data?.heading}
      </h1>
      <h3>
        {getHeadings?.data?.data?.description &&
          getHeadings?.data?.data?.description}
      </h3>
      <div className="clients_details">
        <div className="container-fluid">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            modules={[Autoplay]}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              470: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 7,
              },
              1199: {
                slidesPerView: 9,
              },
              1300: {
                slidesPerView: 10,
              },
              1500: {
                slidesPerView: 11,
              },
            }}
          >
            {allTestimonial?.data?.data?.length >= 1 &&
              allTestimonial?.data?.data?.map((clients, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div
                      onClick={() => setSelected(clients?.id)}
                      key={i}
                      className={`clients_logos ${
                        selected === clients?.id ? "client_active" : ""
                      }`}
                    >
                      <img src={clients?.clientImage} alt="clients logos" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
      <div className="container-fluid">
        <div className="client_reviews">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            // modules={[Autoplay]}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {filterTestimonial?.length >= 1 &&
              filterTestimonial?.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="client_details">
                      <div
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                      <div className="client_profile">
                        <span className="client_name">{data?.authorName}</span>
                        <span className="client_designation">
                          {data?.authorPosition}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
