import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "styles/Pages.css";
import { Autoplay } from "swiper/modules";
import { AllTestimonialMutation2, GetTestimonialPageHeading } from "rest/about";
import { Banner } from "app/components/Ui/Banner";

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
      <Banner
        background={`url(${
          getHeadings?.data?.data && getHeadings?.data?.data?.image
        })`}
        extra="testimonial_banner"
        heading={getHeadings?.data?.data && getHeadings?.data?.data?.heading}
        description={
          getHeadings?.data?.data && getHeadings?.data?.data?.description
        }
      />
      <div className="test-swiper">
        {/* <div className="clients_details"> */}
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
                      // className={`clients_logos ${
                      //   selected === clients?.id ? "client_active" : ""
                      // }`}
                      className={` ${
                        selected === clients?.id ? "client_active" : ""
                      }`}
                    >
                      <img
                        src={clients?.clientImage}
                        alt="clients logos"
                        className="w-100"
                      />
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
            {filterTestimonial?.length >= 1 &&
              filterTestimonial[0]?.testimonials?.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="client_details">
                      <div
                        dangerouslySetInnerHTML={{ __html: data?.description }}
                      />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                          <span className="client_name">
                            {data?.authorName}
                          </span>
                          <span className="client_designation">
                            {data?.authorPosition}
                          </span>
                        </div>
                        <img
                          src={filterTestimonial[0].clientImage}
                          alt="client-image"
                          width={100}
                        />
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

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "styles/Pages.css";
// import { Autoplay } from "swiper/modules";
// import {
//   AllTestimonialClientMutation,
//   AllTestimonialMutation2,
//   GetTestimonialPageHeading,
// } from "rest/about";
// import { Banner } from "app/components/Ui/Banner";

// export const TestimonialsPage = () => {
//   const allTestimonial = AllTestimonialMutation2();
//   const allClientImages = AllTestimonialClientMutation();

//   const getHeadings = GetTestimonialPageHeading();
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     if (allTestimonial?.data?.data) {
//       setSelected(allTestimonial?.data?.data[0]?.id);
//     }
//   }, [allTestimonial?.data?.data]);

//   const filterTestimonial = allTestimonial?.data?.data?.filter((elm) => {
//     return elm.id === selected;
//   });

//   return (
//     <div className="testimonial_page">
//       <Banner
//         background={`url(${
//           getHeadings?.data?.data && getHeadings?.data?.data?.image
//         })`}
//         extra="testimonial_banner"
//         heading={getHeadings?.data?.data && getHeadings?.data?.data?.heading}
//         description={
//           getHeadings?.data?.data && getHeadings?.data?.data?.description
//         }
//       />
//       <div className="test-swiper">
//         <div className="container-fluid">
//           <Swiper
//             slidesPerView={2}
//             spaceBetween={0}
//             modules={[Autoplay]}
//             loop={true}
//             speed={1500}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             breakpoints={{
//               470: {
//                 slidesPerView: 3,
//               },
//               768: {
//                 slidesPerView: 5,
//               },
//               991: {
//                 slidesPerView: 7,
//               },
//               1199: {
//                 slidesPerView: 9,
//               },
//               1300: {
//                 slidesPerView: 10,
//               },
//               1500: {
//                 slidesPerView: 11,
//               },
//             }}
//           >
//             {allClientImages?.data?.data?.length >= 1 &&
//               allClientImages?.data?.data?.map((clients, i) => {
//                 return (
//                   <SwiperSlide key={i}>
//                     <div
//                       onClick={() => setSelected(clients?.id)}
//                       key={i}
//                       className={` ${
//                         selected === clients?.id ? "client_active" : ""
//                       }`}
//                     >
//                       <img
//                         src={
//                           "https://coderzbar.net/pharmacy_dev" +
//                           "/" +
//                           clients?.test_logo
//                         }
//                         alt="clients logos"
//                         className="w-100"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//           </Swiper>
//         </div>
//       </div>
//       <div className="container-fluid">
//         <div className="client_reviews">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             loop={true}
//             modules={[Autoplay]}
//             speed={1500}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//           >
//             {filterTestimonial?.length >= 1 &&
//               filterTestimonial[0]?.testimonials?.map((data, i) => {
//                 return (
//                   <SwiperSlide key={i}>
//                     <div className="client_details">
//                       <div
//                         dangerouslySetInnerHTML={{ __html: data?.description }}
//                       />
//                       <div className="d-flex justify-content-between align-items-center">
//                         <div className="">
//                           <span className="client_name">
//                             {data?.authorName}
//                           </span>
//                           <span className="client_designation">
//                             {data?.authorPosition}
//                           </span>
//                         </div>
//                         <img
//                           src={filterTestimonial[0].clientImage}
//                           alt="client-image"
//                           width={100}
//                         />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };
