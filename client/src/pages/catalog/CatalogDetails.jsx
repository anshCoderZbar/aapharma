import React, { useEffect, useState } from "react";

import "styles/Catalog.css";
import { ChevronsRight } from "lucide-react";
import { AddtoCart } from "app/components/Ui/AddtoCart ";
import { Link, useParams } from "react-router-dom";
import { GetUtility, SingleChemical } from "rest/catalog";

export const CatalogDetails = () => {
  const { id } = useParams();
  const [tabId, setTabId] = useState(-1);
  const singleChemical = SingleChemical(id);

  const getUtility = GetUtility(id);
  const [filteredUtils, setFilteredUtils] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setFilteredUtils(getUtility?.isPending ? [] : [getUtility?.data?.data[0]]);
    setTabId(getUtility?.data?.data && getUtility?.data?.data[0]?.id);
  }, [getUtility?.data?.data]);

  const handleDescTabs = (elm) => {
    const filterRes = getUtility?.data?.data?.filter((data) => {
      return data?.id === elm?.id;
    });
    setFilteredUtils(filterRes);
  };

  const handlePriceChange = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index];
    setQuantity(el?.getAttribute("id"));
    setPrice(e?.target?.value);
  };

  return (
    <div className="catalog__page">
      <div className="catalog_single_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading_single">
            <div className="catalog_banner_content">
              <p className="d-flex justify-content-center align-items-center gap-2">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>{" "}
                <ChevronsRight />
                <Link to="/catalog" className="text-white text-decoration-none">
                  Back
                </Link>{" "}
                <ChevronsRight /> Catalogs
              </p>
              <h1>{singleChemical?.data?.data?.heading}</h1>
            </div>
          </div>
          <div className="catalog_details">
            <div className="row">
              <div className="col-xl-6">
                <div className="catalog_detail_img">
                  <img
                    src={`${singleChemical?.data?.baseUrl}/${
                      singleChemical?.data?.data?.image
                        ? singleChemical?.data?.data?.image
                        : singleChemical?.data?.data?.chemicalImage
                    }`}
                    alt="compount"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="catalog_details_vss">
                  <div className="catalog_details_list">
                    <ul>
                      {singleChemical?.data?.data.catalog_details
                        ? JSON.parse(
                            singleChemical?.data?.data.catalog_details
                          ).map((details, i) => {
                            return (
                              <li key={i}>
                                <p className="detail_type">{details?.label}</p>
                                <p
                                  className="detail_desc"
                                  dangerouslySetInnerHTML={{
                                    __html: details?.description,
                                  }}
                                />
                              </li>
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: singleChemical?.data?.data?.description,
                    }}
                  />

                  {singleChemical?.data?.data?.inStock === "true" && (
                    <div className="catalog_quantity_price">
                      <div className="catalog_options">
                        <h3>Quantity</h3>
                        <select onChange={handlePriceChange}>
                          <option value="">Select Quantity</option>
                          {singleChemical?.data?.data.catalog_quantity_price
                            ?.length >= 1
                            ? JSON.parse(
                                singleChemical?.data?.data
                                  .catalog_quantity_price
                              ).map((details, i) => {
                                return (
                                  <option
                                    id={details?.quantity}
                                    value={details?.price}
                                    key={i}
                                  >
                                    {details?.quantity}
                                  </option>
                                );
                              })
                            : null}
                        </select>
                      </div>
                      {price?.length >= 1 && (
                        <div className="catalog_price pri_before d-flex align-items-center">
                          {/* <h3>Price</h3> */}
                          <span>${price}</span>
                        </div>
                      )}
                    </div>
                  )}
                  {singleChemical?.data?.data?.inStock === "true" ? (
                    <AddtoCart
                      extra="add_to_cart_btn"
                      id={
                        singleChemical?.data?.data?.id &&
                        singleChemical?.data?.data?.id
                      }
                      price={price}
                      isDisabled={!price}
                      quantity={quantity}
                    />
                  ) : (
                    <button className="add_to_cart add_to_cart_btn mt-3">
                      Make Inquiry
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getUtility?.data?.data?.length >= 1 && (
        <div className="container-fluid">
          <div className="information_box utils">
            <ul className="utils_lists_bpjh">
              {getUtility?.data?.data?.map((elm, i) => {
                return (
                  <li
                    key={i}
                    className={`utils_list_info ${
                      tabId === elm?.id ? "info_uti_active" : ""
                    } `}
                    onClick={() => {
                      setTabId(elm?.id);
                      handleDescTabs(elm);
                    }}
                  >
                    {elm?.heading}
                  </li>
                );
              })}
            </ul>
            {filteredUtils?.length >= 1 &&
              filteredUtils?.map((utils, index) => {
                return (
                  <div key={index} className="description vs_itv">
                    <div
                      className="descripition"
                      dangerouslySetInnerHTML={{ __html: utils?.description }}
                    />
                    {utils?.image !== "undefined" && (
                      <a
                        target="_blank"
                        download={`download_${index + 1}.pdf`}
                        href={`data:application/pdf;base64,${utils?.image}`}
                      >
                        Download
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};
