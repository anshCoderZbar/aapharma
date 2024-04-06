import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "styles/Layout.css";
import headerLogo from "assets/header_logo.svg";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { HeaderData } from "app/mock/header";
import { Accordion } from "app/components/Accordion";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { useAtom } from "jotai";
import { allSettings } from "store/SettingsStore";
import { MasterCategory, SubCategory, SubChildCategory } from "rest/main";
import { v4 as uuidv4 } from "uuid";
import { resetButtonVisibility } from "store/CatalogStore";
import { FilterChemical } from "rest/catalog";

export const Header = () => {
  const navRef = useRef(null);
  const submenuRef = useRef(null);
  const navigate = useNavigate();
  const [allDetails] = useAtom(allSettings);
  const [active, setActive] = useState(false);
  const [openInput, setOpenInput] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [accordionId, setAccordionId] = useState(-1);
  const [, setResetButtonVisible] = useAtom(resetButtonVisibility);
  const masterCategory = MasterCategory();
  const subCategory = SubCategory();
  const subChildCategory = SubChildCategory();
  const filterChemical = FilterChemical();

  const handleMenuClick = (i) => {
    if (i === selected) {
      setOpen(!open);
      setSelected(-1);
      if (!open) {
        setSelected(-1);
      }
    } else {
      setSelected(i);
      setOpen(true);
    }
  };

  const handleDocumentClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      const isInsideSubMenu = event.target.closest(".dropdown__list");

      if (!isInsideSubMenu || !open) {
        setOpen(false);
        setSelected(-1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleSubCatalogId = (id) => {
    sessionStorage.setItem("subcategoryId", JSON.stringify([id.toString()]));
    setResetButtonVisible(true);
    filterChemical.mutate();
    setOpen(false);
    setSelected(-1);
  };

  const handleSuperSubCatalogId = (id) => {
    sessionStorage.setItem(
      "supersubcategoryId",
      JSON.stringify([id.toString()])
    );
    setResetButtonVisible(true);
    filterChemical.mutate();
    setOpen(false);
    setSelected(-1);
  };

  useOutsideClick(navRef, active, () => {
    setActive(false);
  });

  return (
    <>
      <header ref={navRef} className="header">
        <div className="container-fluid">
          <div className="nav-colums">
            <div className="nav-left">
              <Link onClick={() => setSelected(-1)} to={"/"}>
                <img
                  src={
                    allDetails?.headerlogo ? allDetails?.headerlogo : headerLogo
                  }
                  alt="logo"
                  className="logo"
                />
              </Link>
              <div className="d-flex position-relative search_input">
                <input type="text" placeholder="Search" />
                <div className="position-absolute top-50 end-0 translate-middle-y search_icon">
                  <Search />
                </div>
              </div>
              <div className="search_icon_md">
                <div onClick={() => setOpenInput(true)} className="full_search">
                  <Search />
                </div>
                <div
                  onClick={() => setOpenInput(false)}
                  className={`close_Icon ${openInput ? "d-block" : "d-none"}`}
                >
                  <X />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className={`${openInput ? "full_input" : "input_none"}`}
                />
              </div>
            </div>
            <div className="nav-right">
              <ul className={`${active ? "nav_active" : ""} nav-ri-ul`}>
                {HeaderData?.map((data, i) => {
                  return (
                    <li
                      className={`nav-right-li ${
                        data?.class ? data?.class : ""
                      }`}
                      key={data?.id}
                    >
                      <div className="d-flex">
                        <Link
                          className={`${
                            window?.location?.pathname === data?.slug
                              ? "active_color"
                              : ""
                          }`}
                          to={data?.slug}
                          onClick={() => setOpen(false)}
                        >
                          {data?.name}
                        </Link>
                        {data?.menu && (
                          <span style={{ cursor: "pointer" }}>
                            <ChevronDown onClick={() => handleMenuClick(i)} />
                          </span>
                        )}
                      </div>
                      {data && selected !== -1 && (
                        <div ref={submenuRef} className="dropdown vP_csPc">
                          {i === selected && (
                            <ul
                              className={`dropdown__list ${
                                open ? "dropdown__list--active" : ""
                              }`}
                            >
                              {i === selected &&
                                i <= 3 &&
                                data?.menu?.map((menu, i) => {
                                  return (
                                    <li
                                      key={i}
                                      className={`dropdown__list-item ${
                                        data?.id === 5 ? "" : "m_xLx"
                                      }`}
                                    >
                                      <Link
                                        className={
                                          window?.location?.pathname ===
                                          menu?.slug
                                            ? "active_color"
                                            : ""
                                        }
                                        onClick={() => {
                                          setActive(false);
                                          setOpen(false);
                                        }}
                                        to={menu?.slug}
                                      >
                                        {menu?.name}
                                      </Link>
                                    </li>
                                  );
                                })}

                              {i === selected &&
                                i === 4 &&
                                masterCategory?.data?.data?.length >= 1 &&
                                masterCategory?.data?.data?.map((menu, i) => {
                                  const subCategoryFilter =
                                    subCategory?.data?.data?.filter(
                                      (elm) => elm?.catalog === menu?.id
                                    );
                                  return (
                                    <li
                                      key={i}
                                      className={`dropdown__list-item ${
                                        data?.id === 5 ? "" : "m_xLx"
                                      }`}
                                    >
                                      <Link>{menu?.heading}</Link>
                                      {subCategory?.data?.data?.length >= 1 && (
                                        <ul
                                          className="acc_types accordion accordion-flush"
                                          id="accordionFlushExample"
                                        >
                                          {subCategoryFilter?.map((elm) => {
                                            const filteredSubChildData =
                                              subChildCategory?.data?.data?.filter(
                                                (sub) => {
                                                  return (
                                                    elm?.id === sub?.catalog2
                                                  );
                                                }
                                              );
                                            return (
                                              <>
                                                {filteredSubChildData?.length <
                                                  1 && (
                                                  <li
                                                    className="act_sing"
                                                    key={elm?.id}
                                                    onClick={() =>
                                                      handleSubCatalogId(
                                                        elm?.id
                                                      )
                                                    }
                                                  >
                                                    {elm?.heading}
                                                  </li>
                                                )}
                                                {filteredSubChildData?.length >=
                                                  1 && (
                                                  <li
                                                    className={`act_sing ${
                                                      accordionId === elm?.id
                                                        ? "change_top_color"
                                                        : ""
                                                    }`}
                                                    key={elm?.id}
                                                  >
                                                    <div className="d-flex justify-content-between">
                                                      <span
                                                        onClick={() =>
                                                          handleSubCatalogId(
                                                            elm?.id
                                                          )
                                                        }
                                                      >
                                                        {elm?.heading}
                                                      </span>
                                                      <span
                                                        onClick={() =>
                                                          setAccordionId(
                                                            accordionId ===
                                                              elm?.id
                                                              ? -1
                                                              : elm?.id
                                                          )
                                                        }
                                                      >
                                                        <ChevronDown />
                                                      </span>
                                                    </div>
                                                    <div
                                                      className={`acc_bdy ${
                                                        accordionId === elm?.id
                                                          ? "open_cat_acc"
                                                          : ""
                                                      }`}
                                                    >
                                                      {subChildCategory?.data
                                                        ?.data?.length >= 1 &&
                                                        filteredSubChildData?.map(
                                                          (category) => {
                                                            return (
                                                              <div
                                                                key={
                                                                  category?.id
                                                                }
                                                                className="acc_bdy_1"
                                                                onClick={() =>
                                                                  handleSuperSubCatalogId(
                                                                    category?.id
                                                                  )
                                                                }
                                                              >
                                                                <div className="text-start">
                                                                  {
                                                                    category?.heading
                                                                  }
                                                                </div>
                                                              </div>
                                                            );
                                                          }
                                                        )}
                                                    </div>
                                                  </li>
                                                )}
                                              </>
                                            );
                                          })}
                                        </ul>
                                      )}
                                    </li>
                                  );
                                })}
                            </ul>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
                <li>
                  <button
                    onClick={() => navigate("/contact-us")}
                    className="contact_btn "
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
              <div onClick={() => setActive(!active)} className="hamburgur">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="page"></div>
    </>
  );
};

// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "styles/Layout.css";
// import headerLogo from "assets/header_logo.svg";
// import { ChevronDown, Menu, Search, X } from "lucide-react";
// import { HeaderData } from "app/mock/header";
// import { Accordion } from "app/components/Accordion";
// import { useOutsideClick } from "lib/hooks/useOutsideClick";
// import { useAtom } from "jotai";
// import { allSettings } from "store/SettingsStore";
// import { MasterCategory, SubCategory, SubChildCategory } from "rest/main";
// import { v4 as uuidv4 } from "uuid";

// export const Header = () => {
//   const navRef = useRef(null);
//   const submenuRef = useRef(null);
//   const navigate = useNavigate();
//   const [allDetails] = useAtom(allSettings);
//   const [active, setActive] = useState(false);
//   const [openInput, setOpenInput] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(-1);

//   const masterCategory = MasterCategory();
//   const subCategory = SubCategory();
//   const subChildCategory = SubChildCategory();

//   const handleMenuClick = (i) => {
//     if (i === selected) {
//       setOpen(!open);
//       setSelected(-1);
//       if (!open) {
//         setSelected(-1);
//       }
//     } else {
//       setSelected(i);
//       setOpen(true);
//     }
//   };

//   const handleDocumentClick = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       const isInsideSubMenu = event.target.closest(".dropdown__list");

//       if (!isInsideSubMenu || !open) {
//         setOpen(false);
//         setSelected(-1);
//       }
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleDocumentClick);

//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, []);

//   useOutsideClick(navRef, active, () => {
//     setActive(false);
//   });

//   return (
//     <>
//       <header ref={navRef} className="header">
//         <div className="container-fluid">
//           <div className="nav-colums">
//             <div className="nav-left">
//               <Link onClick={() => setSelected(-1)} to={"/"}>
//                 <img
//                   src={
//                     allDetails?.headerlogo ? allDetails?.headerlogo : headerLogo
//                   }
//                   alt="logo"
//                   className="logo"
//                 />
//               </Link>
//               <div className="d-flex position-relative search_input">
//                 <input type="text" placeholder="Search" />
//                 <div className="position-absolute top-50 end-0 translate-middle-y search_icon">
//                   <Search />
//                 </div>
//               </div>
//               <div className="search_icon_md">
//                 <div onClick={() => setOpenInput(true)} className="full_search">
//                   <Search />
//                 </div>
//                 <div
//                   onClick={() => setOpenInput(false)}
//                   className={`close_Icon ${openInput ? "d-block" : "d-none"}`}
//                 >
//                   <X />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className={`${openInput ? "full_input" : "input_none"}`}
//                 />
//               </div>
//             </div>
//             <div className="nav-right">
//               <ul className={`${active ? "nav_active" : ""} nav-ri-ul`}>
//                 {HeaderData?.map((data, i) => {
//                   return (
//                     <li
//                       className={`nav-right-li ${
//                         data?.class ? data?.class : ""
//                       }`}
//                       key={data?.id}
//                     >
//                       <div className="d-flex">
//                         <Link
//                           className={`${
//                             window?.location?.pathname === data?.slug
//                               ? "active_color"
//                               : ""
//                           }`}
//                           to={data?.slug}
//                           onClick={() => setOpen(false)}
//                         >
//                           {data?.name}
//                         </Link>
//                         {data?.menu && (
//                           <span style={{ cursor: "pointer" }}>
//                             <ChevronDown onClick={() => handleMenuClick(i)} />
//                           </span>
//                         )}
//                       </div>
//                       {data && selected !== -1 && (
//                         <div ref={submenuRef} className="dropdown vP_csPc">
//                           {i === selected && (
//                             <ul
//                               className={`dropdown__list ${
//                                 open ? "dropdown__list--active" : ""
//                               }`}
//                             >
//                               {i === selected &&
//                                 i <= 3 &&
//                                 data?.menu?.map((menu, i) => {
//                                   return (
//                                     <li
//                                       key={i}
//                                       className={`dropdown__list-item ${
//                                         data?.id === 5 ? "" : "m_xLx"
//                                       }`}
//                                     >
//                                       <Link
//                                         className={
//                                           window?.location?.pathname ===
//                                           menu?.slug
//                                             ? "active_color"
//                                             : ""
//                                         }
//                                         onClick={() => {
//                                           setActive(false);
//                                           setOpen(false);
//                                         }}
//                                         to={menu?.slug}
//                                       >
//                                         {menu?.name}
//                                       </Link>
//                                     </li>
//                                   );
//                                 })}

//                               {i === selected &&
//                                 i === 4 &&
//                                 masterCategory?.data?.data?.length >= 1 &&
//                                 masterCategory?.data?.data?.map((menu, i) => {
//                                   const subCategoryFilter =
//                                     subCategory?.data?.data?.filter(
//                                       (elm) => elm?.catalog === menu?.id
//                                     );
//                                   return (
//                                     <li
//                                       key={i}
//                                       className={`dropdown__list-item ${
//                                         data?.id === 5 ? "" : "m_xLx"
//                                       }`}
//                                     >
//                                       <Link>{menu?.heading}</Link>
//                                       {subCategory?.data?.data?.length >= 1 && (
//                                         <ul
//                                           className="acc_types accordion accordion-flush"
//                                           id="accordionFlushExample"
//                                         >
//                                           {subCategoryFilter?.map((elm) => {
//                                             const filteredSubChildData =
//                                               subChildCategory?.data?.data?.filter(
//                                                 (sub) => {
//                                                   return (
//                                                     elm?.id === sub?.catalog2
//                                                   );
//                                                 }
//                                               );
//                                             return (
//                                               <li key={elm?.id}>
//                                                 <Accordion
//                                                   heading={elm?.heading}
//                                                   accId={uuidv4()}
//                                                   extraClass="acc_bg"
//                                                 >
//                                                   <div className="accordion-body acc_bdy">
//                                                     {subChildCategory?.data
//                                                       ?.data?.length >= 1 &&
//                                                       filteredSubChildData?.map(
//                                                         (category) => {
//                                                           return (
//                                                             <div
//                                                               key={category?.id}
//                                                               className="accordion-body acc_bdy_1"
//                                                             >
//                                                               <div className="form-check">
//                                                                 <input
//                                                                   className="form-check-input input_acc_check"
//                                                                   type="checkbox"
//                                                                   id={
//                                                                     category?.id
//                                                                   }
//                                                                 />
//                                                                 <label
//                                                                   className="form-check-label acc_input_label"
//                                                                   htmlFor={
//                                                                     category?.id
//                                                                   }
//                                                                 >
//                                                                   {
//                                                                     category?.heading
//                                                                   }
//                                                                 </label>
//                                                               </div>
//                                                             </div>
//                                                           );
//                                                         }
//                                                       )}
//                                                   </div>
//                                                 </Accordion>
//                                               </li>
//                                             );
//                                           })}
//                                         </ul>
//                                       )}
//                                     </li>
//                                   );
//                                 })}
//                             </ul>
//                           )}
//                         </div>
//                       )}
//                     </li>
//                   );
//                 })}
//                 <li>
//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="contact_btn "
//                   >
//                     Contact Us
//                   </button>
//                 </li>
//               </ul>
//               <div onClick={() => setActive(!active)} className="hamburgur">
//                 <Menu />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <div className="page"></div>
//     </>
//   );
// };
