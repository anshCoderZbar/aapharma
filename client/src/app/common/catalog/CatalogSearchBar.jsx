import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  CatalogCategory1,
  CatalogCategory2,
  CatalogCategory3,
  FilterChemical,
} from "rest/catalog";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { useAtom } from "jotai";
import { categoryChecked } from "store/CatalogStore";

export const CatalogSearchBar = () => {
  const catalogRef = useRef(null);
  const [openCatalogFilter, setOpenCatalogFilter] = useState(false);

  const [_, setCategoryCheck] = useAtom(categoryChecked);
  const [catalogId, setCatalogId] = useState({
    categoryId: [],
    subcategoryId: [],
    supersubcategoryId: [],
  });

  const filterChemical = FilterChemical(catalogId);

  const [checkboxModified, setCheckboxModified] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setCatalogId((prevCatalogId) => ({
      ...prevCatalogId,
      [name]: checked
        ? [...prevCatalogId[name], value]
        : prevCatalogId[name].filter((item) => item !== value),
    }));

    setCheckboxModified(true);
  };

  useEffect(() => {
    if (checkboxModified) {
      const anyCheckboxChecked =
        catalogId.categoryId.length > 0 ||
        catalogId.subcategoryId.length > 0 ||
        catalogId.supersubcategoryId.length > 0;

      setCategoryCheck(anyCheckboxChecked);
      filterChemical.mutate();

      setCheckboxModified(false);
    }
  }, [catalogId, checkboxModified, setCategoryCheck, filterChemical]);

  useOutsideClick(catalogRef, openCatalogFilter, () => {
    setOpenCatalogFilter(false);
  });

  const [filterNo, setFilterNo] = useState(-1);
  const catalogCategory1 = CatalogCategory1(filterNo);
  const catalogCategory2 = CatalogCategory2(filterNo);
  const catalogCategory3 = CatalogCategory3(filterNo);

  return (
    <ul ref={catalogRef} className="filter_left-list">
      <li
        onClick={() => {
          setOpenCatalogFilter(filterNo === 1 ? !openCatalogFilter : true);
          setFilterNo(1);
        }}
        className="d-flex align-items-center"
      >
        Product Type
        <span>
          <ChevronDown />
        </span>
        {catalogCategory1?.data?.data?.length >= 1 && (
          <div
            className={`inner_filter_dropdown ${
              filterNo === 1 && openCatalogFilter
                ? "inner_filter_dropdown--active"
                : ""
            }`}
          >
            <ul className="inner_list">
              {catalogCategory1?.data?.data?.map((data, i) => {
                return (
                  <li key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id={data?.id}
                        name="categoryId"
                        value={data?.id}
                        onChange={handleChange}
                      />
                      <label className="form-check-label " htmlFor={data?.id}>
                        {data?.heading}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>

      <li
        onClick={() => {
          setOpenCatalogFilter(filterNo === 2 ? !openCatalogFilter : true);
          setFilterNo(2);
        }}
        className="d-flex align-items-center"
      >
        Research Areas
        <span>
          <ChevronDown />
        </span>
        {catalogCategory2?.data?.data?.length >= 1 && (
          <div
            className={`inner_filter_dropdown ${
              filterNo === 2 && openCatalogFilter
                ? "inner_filter_dropdown--active"
                : ""
            }`}
          >
            <ul className="inner_list">
              {catalogCategory2?.data?.data?.map((data, i) => {
                return (
                  <li key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id={data?.id}
                        name="subcategoryId"
                        value={data?.id}
                        onChange={handleChange}
                      />
                      <label className="form-check-label " htmlFor={data?.id}>
                        {data?.heading}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>

      <li
        onClick={() => {
          setOpenCatalogFilter(filterNo === 3 ? !openCatalogFilter : true);
          setFilterNo(3);
        }}
        className="d-flex align-items-center"
      >
        Applications
        <span>
          <ChevronDown />
        </span>
        {catalogCategory3?.data?.data?.length >= 1 && (
          <div
            className={`inner_filter_dropdown ${
              filterNo === 3 && openCatalogFilter
                ? "inner_filter_dropdown--active"
                : ""
            }`}
          >
            <ul className="inner_list">
              {catalogCategory3?.data?.data?.map((data, i) => {
                return (
                  <li key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        id={data?.id}
                        name="supersubcategoryId"
                        value={data?.id}
                        onChange={handleChange}
                      />
                      <label className="form-check-label " htmlFor={data?.id}>
                        {data?.heading}
                      </label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
};

// const filterSubCategory =
//   catalogCategory2?.data?.data?.length >= 1 &&
//   catalogCategory2?.data?.data?.filter((elm) => {
//     const subFilteredCatalog = catalogId?.categoryId?.some((details) => {
//       return Number.parseInt(elm?.catalog) === Number.parseInt(details);
//     });
//     return subFilteredCatalog;
//   });

// const filterSuperSubCategory =
//   catalogCategory3?.data?.data?.length >= 1 &&
//   catalogCategory3?.data?.data?.filter((elm) => {
//     const subFilter = catalogId?.categoryId?.some((details) => {
//       const superSubFilter = catalogId?.subcategoryId?.some((id) => {
//         return (
//           Number.parseInt(elm?.catalog2) === Number.parseInt(id) &&
//           Number.parseInt(elm?.catalog) === Number.parseInt(details)
//         );
//       });
//       return superSubFilter;
//     });
//     return subFilter;
//   });

// export const CatalogSearchBar = () => {
//   // ... (your existing state and hooks)

//   // Function to check if any filters are applied
//   const isFilterApplied = () => {
//     return (
//       catalogId.categoryId.length > 0 ||
//       catalogId.subcategoryId.length > 0 ||
//       catalogId.supersubcategoryId.length > 0
//     );
//   };

//   // Placeholder record for "No Records Found"
//   const noRecordFound = {
//     id: "no-record-found",
//     heading: "No Records Found",
//   };

//   return (
//     <ul ref={catalogRef} className="filter_left-list">
//       {/* Product Type */}
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
//               {(isFilterApplied()
//                 ? catalogCategory1?.data?.data.length > 0
//                   ? catalogCategory1?.data?.data
//                   : [noRecordFound]
//                 : catalogCategory1?.data?.data
//               )?.map((data, i) => {
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

//       {/* Research Areas */}
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
//               {(isFilterApplied()
//                 ? catalogCategory2?.data?.data.length > 0
//                   ? filterSubCategory
//                   : [noRecordFound]
//                 : catalogCategory2?.data?.data
//               )?.map((data, i) => {
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

//       {/* Applications */}
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
//               {(isFilterApplied()
//                 ? catalogCategory3?.data?.data.length > 0
//                   ? filterSuperSubCategory
//                   : [noRecordFound]
//                 : catalogCategory3?.data?.data
//               )?.map((data, i) => {
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

//       {/* Display "No Records Found" in an h4 tag */}
//       {isFilterApplied() &&
//         catalogCategory1?.data?.data.length === 0 &&
//         catalogCategory2?.data?.data.length === 0 &&
//         catalogCategory3?.data?.data.length === 0 && (
//           <h4>No Records Found</h4>
//         )}
//     </ul>
//   );
// };
