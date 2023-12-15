import React, { useEffect, useState } from "react";

import "styles/Catalog.css";
import { ChevronsRight } from "lucide-react";
import { AddtoCart } from "app/components/Ui/AddtoCart ";
import { useParams } from "react-router-dom";
import { GetUtility, SingleChemical } from "rest/catalog";

export const CatalogDetails = () => {
  const { id } = useParams();
  const singleChemical = SingleChemical(id);

  const getUtility = GetUtility(id);
  const [filteredUtils, setFilteredUtils] = useState([]);
  useEffect(() => {
    setFilteredUtils(getUtility?.isPending ? [] : [getUtility?.data?.data[0]]);
  }, [getUtility?.data?.data]);

  const handleDescTabs = (elm) => {
    const filterRes = getUtility?.data?.data?.filter((data) => {
      return data?.id === elm?.id;
    });
    setFilteredUtils(filterRes);
  };

  console.log(filteredUtils);

  return (
    <div className="catalog__page">
      <div className="catalog_single_banner">
        <div className="container-fluid">
          <div className="catalog_banner_heading_single">
            <div className="catalog_banner_content">
              <p className="d-flex justify-content-center align-items-center gap-2">
                Catalogs <ChevronsRight />
                <p
                  className="mt-0"
                  dangerouslySetInnerHTML={{
                    __html: singleChemical?.data?.data?.description,
                  }}
                />
              </p>
              <h1>{singleChemical?.data?.data?.heading}</h1>
            </div>
          </div>
          <div className="catalog_details">
            <div className="row">
              <div className="col-lg-6">
                <div className="catalog_detail_img">
                  <img src={require("assets/catalog_img.png")} alt="compount" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="catalog_details_vss">
                  <div className="catalog_details_list">
                    <ul>
                      <li>
                        <p className="detail_type_1">Product Class</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.productClass}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">CLogP</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.clogP}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">MV</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.mv}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">hbd</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.hbd}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">hba</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.hba}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">rotb</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.rotb}
                        </p>
                      </li>
                      <li>
                        <p className="detail_type_1">fap3</p>
                        <p className="detail_desc_1">
                          {singleChemical?.data?.data?.fap3}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <p>
                    This compounds has uses in synthesis of potential drug
                    candidates and as a negative control in biochemicals assays.
                  </p>
                  <div className="catalog_quantity_price">
                    <div className="catalog_options">
                      <h3>Quantity</h3>
                      <select>
                        <option>Choose an option</option>
                        <option value="1">Default Sorting</option>
                        <option value="2">Default Sorting 1</option>
                        <option value="3">Default Sorting 2</option>
                      </select>
                    </div>
                    <div className="catalog_price">
                      <h3>Price</h3>
                      <span>${singleChemical?.data?.data?.price}</span>
                    </div>
                  </div>
                  <AddtoCart extra="add_to_cart_btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="information_box utils">
          <ul>
            {getUtility?.data?.data?.map((elm) => {
              return (
                <li onClick={() => handleDescTabs(elm)}>{elm?.heading}</li>
              );
            })}
          </ul>
          {filteredUtils?.length >= 1 &&
            filteredUtils?.map((utils) => {
              return (
                <div className="description">
                  <div
                    className="descripition"
                    dangerouslySetInnerHTML={{ __html: utils?.description }}
                  />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`${getUtility?.data?.baseUrl}/${utils?.image}`}
                  >
                    View
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
