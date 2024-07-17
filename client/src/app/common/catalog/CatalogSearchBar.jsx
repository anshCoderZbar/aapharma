import React, { useRef, useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";

import {
  CatalogCategory1,
  CatalogCategory2,
  CatalogCategory3,
  FilterChemical,
} from "rest/catalog";
// import { useAtom } from "jotai";
// import { categoryChecked } from "store/CatalogStore";
import { useOutsideClick } from "lib/hooks/useOutsideClick";

export const CatalogSearchBar = ({ catalogId, setCatalogId }) => {
  const catalogRef = useRef(null);
  const [openCatalogFilter, setOpenCatalogFilter] = useState(false);

  const filterChemical = FilterChemical();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    const updatedCatalogId = {
      ...catalogId,
      [name]: checked
        ? [...(catalogId[name] || []), value]
        : (catalogId[name] || []).filter((item) => item !== value),
    };

    const subCatalog = updatedCatalogId?.subCategoryId;
    sessionStorage.setItem("subcategoryId", JSON.stringify(subCatalog));
    const superSubCatalog = updatedCatalogId?.supersubcategoryId;
    sessionStorage.setItem(
      "supersubcategoryId",
      JSON.stringify(superSubCatalog)
    );
    setCatalogId(updatedCatalogId);
  };

  useOutsideClick(catalogRef, openCatalogFilter, () => {
    setOpenCatalogFilter(false);
  });

  const [accordionActive, setAccordionActive] = useState(-1);
  const [showAccordion, setShowAccordion] = useState(false);

  const [filterNo, setFilterNo] = useState(-1);
  const catalogCategory1 = CatalogCategory1();
  const catalogCategory2 = CatalogCategory2();
  const catalogCategory3 = CatalogCategory3();

  const filterByCategory = () => {
    filterChemical.mutate();
    setOpenCatalogFilter(false);
  };

  return (
    <ul ref={catalogRef} className="filter_left-list">
      {catalogCategory1?.data?.data?.length >= 1 &&
        catalogCategory1?.data?.data?.map((level1, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setOpenCatalogFilter(true);
                setFilterNo(level1?.id);
              }}
              className="d-flex align-items-center"
            >
              {level1?.heading}
              <span>
                <ChevronDown />
              </span>

              <div
                className={`inner_filter_dropdown ${
                  filterNo === level1?.id && openCatalogFilter
                    ? "inner_filter_dropdown--active"
                    : ""
                }`}
              >
                <ul className="inner_list">
                  {catalogCategory2?.data?.data?.map((level2, i) => {
                    return (
                      level2?.catalog === level1?.id && (
                        <li className="cstm_accord" key={i}>
                          <div className="form-check d-flex justify-content-between">
                            <div className="input_checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={level2?.heading
                                  ?.toLowerCase()
                                  ?.replaceAll(" ", "_")}
                                name="subCategoryId"
                                value={level2?.id}
                                onChange={handleChange}
                                checked={
                                  catalogId.subCategoryId &&
                                  catalogId.subCategoryId.includes(
                                    level2?.id?.toString()
                                  )
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor={level2?.heading
                                  ?.toLowerCase()
                                  ?.replaceAll(" ", "_")}
                              >
                                {level2?.heading}
                              </label>
                            </div>
                            {level2?.hasLevel3 === true && (
                              <div
                                key={i}
                                onClick={() => {
                                  setAccordionActive(level2?.id);
                                  setShowAccordion(
                                    accordionActive === level2?.id
                                      ? !showAccordion
                                      : true
                                  );
                                }}
                                className=""
                              >
                                {accordionActive === level2?.id &&
                                showAccordion ? (
                                  <Minus />
                                ) : (
                                  <Plus />
                                )}
                              </div>
                            )}
                          </div>
                          <div
                            className={`accord_cstm ${
                              accordionActive === level2?.id && showAccordion
                                ? "acc_active"
                                : ""
                            }`}
                          >
                            {catalogCategory3?.data?.data?.map((level3, i) => {
                              return (
                                level3?.catalog2 === level2?.id &&
                                level3?.catalog === level2?.catalog && (
                                  <div key={i} className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id={level3?.id}
                                      name="supersubcategoryId"
                                      value={level3?.id}
                                      onChange={handleChange}
                                      checked={
                                        catalogId.supersubcategoryId &&
                                        catalogId.supersubcategoryId.includes(
                                          level3?.id?.toString()
                                        )
                                      }
                                    />
                                    <label
                                      className="form-check-label "
                                      htmlFor={level3?.id}
                                    >
                                      {level3?.heading}
                                    </label>
                                  </div>
                                )
                              );
                            })}
                          </div>
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      {catalogId.subCategoryId.length > 0 ||
      catalogId.supersubcategoryId.length > 0 ? (
        <button onClick={filterByCategory} className="filter_btn_nkjh">
          Apply
        </button>
      ) : null}
    </ul>
  );
};

// import React, { useEffect, useRef, useState } from "react";
// import { ChevronDown } from "lucide-react";

// import {
//   CatalogCategory1,
//   CatalogCategory2,
//   CatalogCategory3,
//   FilterChemical,
// } from "rest/catalog";
// import { useOutsideClick } from "lib/hooks/useOutsideClick";
// import { useAtom } from "jotai";
// import { categoryChecked } from "store/CatalogStore";

// export const CatalogSearchBar = () => {
//   const catalogRef = useRef(null);
//   const [openCatalogFilter, setOpenCatalogFilter] = useState(false);

//   const [_, setCategoryCheck] = useAtom(categoryChecked);
//   const [catalogId, setCatalogId] = useState({
//     categoryId: [],
//     subcategoryId: [],
//     supersubcategoryId: [],
//   });

//   const filterChemical = FilterChemical(catalogId);

//   const [checkboxModified, setCheckboxModified] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;

//     setCatalogId((prevCatalogId) => ({
//       ...prevCatalogId,
//       [name]: checked
//         ? [...prevCatalogId[name], value]
//         : prevCatalogId[name].filter((item) => item !== value),
//     }));

//     setCheckboxModified(true);
//   };

//   useEffect(() => {
//     if (checkboxModified) {
//       const anyCheckboxChecked =
//         catalogId.categoryId.length > 0 ||
// catalogId.subcategoryId.length > 0 ||
// catalogId.supersubcategoryId.length > 0;

//       setCategoryCheck(anyCheckboxChecked);
//       filterChemical.mutate();

//       setCheckboxModified(false);
//     }
//   }, [catalogId, checkboxModified, setCategoryCheck, filterChemical]);

//   useOutsideClick(catalogRef, openCatalogFilter, () => {
//     setOpenCatalogFilter(false);
//   });

//   const [filterNo, setFilterNo] = useState(-1);
//   const catalogCategory1 = CatalogCategory1(filterNo);
//   const catalogCategory2 = CatalogCategory2(filterNo);
//   const catalogCategory3 = CatalogCategory3(filterNo);

//   return (
//     <ul ref={catalogRef} className="filter_left-list">
//       <li
//         onClick={() => {
//           setOpenCatalogFilter(filterNo === 1 ? !openCatalogFilter : true);
//           setFilterNo(1);
//         }}
//         className="d-flex align-items-center"
//       >
//         Product Type
//         <span>
//           <ChevronDown />
//         </span>
//         {catalogCategory1?.data?.data?.length >= 1 && (
//           <div
//             className={`inner_filter_dropdown ${
//               filterNo === 1 && openCatalogFilter
//                 ? "inner_filter_dropdown--active"
//                 : ""
//             }`}
//           >
//             <ul className="inner_list">
//               {catalogCategory1?.data?.data?.map((data, i) => {
//                 return (
//                   <li key={i}>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input "
//                         type="checkbox"
//                         id={data?.id}
//                         name="categoryId"
//                         value={data?.id}
//                         onChange={handleChange}
//                       />
//                       <label className="form-check-label " htmlFor={data?.id}>
//                         {data?.heading}
//                       </label>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </li>

//       <li
//         onClick={() => {
//           setOpenCatalogFilter(filterNo === 2 ? !openCatalogFilter : true);
//           setFilterNo(2);
//         }}
//         className="d-flex align-items-center"
//       >
//         Research Areas
//         <span>
//           <ChevronDown />
//         </span>
//         {catalogCategory2?.data?.data?.length >= 1 && (
//           <div
//             className={`inner_filter_dropdown ${
//               filterNo === 2 && openCatalogFilter
//                 ? "inner_filter_dropdown--active"
//                 : ""
//             }`}
//           >
//             <ul className="inner_list">
//               {catalogCategory2?.data?.data?.map((data, i) => {
//                 return (
//                   <li key={i}>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input "
//                         type="checkbox"
//                         id={data?.id}
//                         name="subcategoryId"
//                         value={data?.id}
//                         onChange={handleChange}
//                       />
//                       <label className="form-check-label " htmlFor={data?.id}>
//                         {data?.heading}
//                       </label>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </li>

//       <li
//         onClick={() => {
//           setOpenCatalogFilter(filterNo === 3 ? !openCatalogFilter : true);
//           setFilterNo(3);
//         }}
//         className="d-flex align-items-center"
//       >
//         Applications
//         <span>
//           <ChevronDown />
//         </span>
//         {catalogCategory3?.data?.data?.length >= 1 && (
//           <div
//             className={`inner_filter_dropdown ${
//               filterNo === 3 && openCatalogFilter
//                 ? "inner_filter_dropdown--active"
//                 : ""
//             }`}
//           >
//             <ul className="inner_list">
//               {catalogCategory3?.data?.data?.map((data, i) => {
//                 return (
//                   <li key={i}>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input "
//                         type="checkbox"
//                         id={data?.id}
//                         name="supersubcategoryId"
//                         value={data?.id}
//                         onChange={handleChange}
//                       />
//                       <label className="form-check-label " htmlFor={data?.id}>
//                         {data?.heading}
//                       </label>
//                     </div>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </li>
//     </ul>
//   );
// };
