import React, { useEffect, useRef, useState } from "react";
import { MoveUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import { AllArticlesMutation } from "rest/home";
import { useNavigate } from "react-router-dom";

export const Articles = () => {
  const allArticles = AllArticlesMutation();
  const imageRefs = useRef([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageHeights, setImageHeights] = useState([]);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleSlideChange = () => {
    const heights = imageRefs.current.map((ref) => {
      if (ref && ref.current && ref.current.complete) {
        return ref.current.offsetHeight - 100;
      }
      return 0;
    });
    setImageHeights(heights);
  };

  useEffect(() => {
    if (!isLoaded && imageHeights.length > 0) {
      swiperRef?.current?.swiper?.slideTo(0);
      setIsLoaded(true);
    }
  }, [imageHeights]);

  return (
    <div className="articles_inner_card">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        loop={true}
        autoHeight={true}
        observer={true}
        observeParents={true}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
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
                      <button
                        onClick={() => navigate(`/article/${article?.id}`)}
                        className="primary_btn_outline d-flex"
                      >
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
        <button
          onClick={() => navigate("/whitepaper")}
          className="primary_buttton btn_papers"
        >
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
