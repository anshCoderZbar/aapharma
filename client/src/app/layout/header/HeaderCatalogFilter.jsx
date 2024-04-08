import React, { useState } from "react";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

import { FilterChemical } from "rest/catalog";
import { SubChildCategory } from "rest/main";
import { ChevronDown } from "lucide-react";

import { resetButtonVisibility } from "store/CatalogStore";

export const HeaderCatalogFilter = (props) => {
  const {
    menu,
    subCategoryFilter,
    subCategory,
    setOpen,
    setSelected,
    i,
    data,
  } = props;

  const [accordionId, setAccordionId] = useState(-1);
  const [, setResetButtonVisible] = useAtom(resetButtonVisibility);

  const subChildCategory = SubChildCategory();
  const filterChemical = FilterChemical();

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

  return (
    <li
      key={i}
      className={`dropdown__list-item ${data?.id === 5 ? "" : "m_xLx"}`}
    >
      <Link>{menu?.heading}</Link>
      {subCategory?.data?.data?.length >= 1 && (
        <ul
          className="acc_types accordion accordion-flush"
          id="accordionFlushExample"
        >
          {subCategoryFilter?.map((elm) => {
            const filteredSubChildData = subChildCategory?.data?.data?.filter(
              (sub) => {
                return elm?.id === sub?.catalog2;
              }
            );
            return (
              <>
                {filteredSubChildData?.length < 1 && (
                  <li
                    className="act_sing"
                    key={elm?.id}
                    onClick={() => handleSubCatalogId(elm?.id)}
                  >
                    {elm?.heading}
                  </li>
                )}
                {filteredSubChildData?.length >= 1 && (
                  <li
                    className={`act_sing ${
                      accordionId === elm?.id ? "change_top_color" : ""
                    }`}
                    key={elm?.id}
                  >
                    <div className="d-flex justify-content-between">
                      <span onClick={() => handleSubCatalogId(elm?.id)}>
                        {elm?.heading}
                      </span>
                      <span
                        onClick={() =>
                          setAccordionId(accordionId === elm?.id ? -1 : elm?.id)
                        }
                      >
                        <ChevronDown />
                      </span>
                    </div>
                    <div
                      className={`acc_bdy ${
                        accordionId === elm?.id ? "open_cat_acc" : ""
                      }`}
                    >
                      {subChildCategory?.data?.data?.length >= 1 &&
                        filteredSubChildData?.map((category) => {
                          return (
                            <div
                              key={category?.id}
                              className="acc_bdy_1"
                              onClick={() =>
                                handleSuperSubCatalogId(category?.id)
                              }
                            >
                              <div className="text-start">
                                {category?.heading}
                              </div>
                            </div>
                          );
                        })}
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
};
