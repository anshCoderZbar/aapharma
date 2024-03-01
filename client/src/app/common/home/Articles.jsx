import React, { useEffect, useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import { AllArticlesMutation } from "rest/home";

export const Articles = () => {
  const allArticles = AllArticlesMutation();
  const imageRefs = useRef([]);
  const [imageHeights, setImageHeights] = useState([]);

  const handleSlideChange = () => {
    const heights = imageRefs.current.map((ref) => {
      if (ref && ref.current && ref.current.complete) {
        return ref.current.offsetHeight - 100;
      }
      return 0;
    });
    setImageHeights(heights);
  };

  return (
    <div className="articles_inner_card">
      <Swiper
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        modules={[Pagination]}
        loop={true}
        autoHeight={true}
        pagination={{ clickable: true }}
      >
        {allArticles?.data?.data?.length >= 1 &&
          allArticles?.data?.data?.map((article, i) => {
            const imageRef = React.createRef();
            imageRefs.current[i] = imageRef;
            return (
              <SwiperSlide key={i}>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div
                      style={{ height: imageHeights[i] }}
                      className="articles_content rwewe"
                    >
                      <h3>{article?.heading}</h3>
                      <div
                        className="art_csa"
                        dangerouslySetInnerHTML={{
                          __html: article?.description,
                        }}
                      />
                    </div>
                    <div className="read_blog_btn">
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
                      <img
                        ref={imageRef}
                        src={article?.featuredImage}
                        alt="articleImg"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        <button className="primary_buttton btn_papers">
          Additional Papers
        </button>
      </Swiper>
    </div>
  );
};

// export const Articles = () => {
//   const allArticles = AllArticlesMutation();
//   const imageRef = useRef();
//   const [imageHeight, setImageHeight] = useState(0);

//   useEffect(() => {
//     if (imageRef.current && imageRef.current.complete) {
//       setImageHeight(imageRef.current.offsetHeight);
//     }
//   }, []);

//   return (
//     <div className="articles_inner_card">
//       <Swiper
//         slidesPerView={1}
//         modules={[Pagination]}
//         loop={true}
//         pagination={{ clickable: true }}
//       >
//         {allArticles?.data?.data?.length >= 1 &&
//           allArticles?.data?.data?.map((article, i) => {
//             return (
//               <SwiperSlide key={i}>
//                 <div className="row mt-3">
//                   <div className="col-lg-6">
//                     <div className="articles_content">
//                       <h3>{article?.heading}</h3>
//                       <div
//                         className="art_csa"
//                         style={{ height: imageHeight }}
//                         dangerouslySetInnerHTML={{
//                           __html: article?.description,
//                           // article?.description?.length >= 1100
//                           //   ? article?.description?.slice(0, 1100) + "..."
//                           //   : article?.description,
//                         }}
//                       />
//                       <button className="primary_btn_outline d-flex">
//                         Read More
//                         <span>
//                           <MoveUpRight />
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-lg-6">
//                     <div className="article_img">
//                       <img
//                         ref={imageRef}
//                         src={article?.featuredImage}
//                         alt="articleImg"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         <button className="primary_buttton btn_papers">
//           Additional Papers
//         </button>
//       </Swiper>
//     </div>
//   );
// };
