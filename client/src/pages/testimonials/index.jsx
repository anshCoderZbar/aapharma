import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "styles/Pages.css";
import { AllClientMutation, AllTestimonialMutation } from "rest/home";
import { Autoplay } from "swiper/modules";

export const TestimonialsPage = () => {
  const allClients = AllClientMutation();
  const allTestimonial = AllTestimonialMutation();

  return (
    <div className="testimonial_page">
      <h1 className="main_top_heading">Testimonials</h1>
      <h3>Current and legacy clients</h3>
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
            {allClients?.data?.data?.length >= 1 &&
              allClients?.data?.data?.map((clients, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div key={i} className="clients_logos">
                      <img src={clients?.image} alt="clients logos" />
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
            modules={[Autoplay]}
            speed={1500}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {allTestimonial?.data?.data?.length >= 1 &&
              allTestimonial?.data?.data?.map((data, i) => {
                console.log(data);
                return (
                  <SwiperSlide key={i}>
                    <div className="client_details">
                      <div
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                      <div className="client_profile">
                        <img src={data?.authorImage} alt="client profile" />
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
