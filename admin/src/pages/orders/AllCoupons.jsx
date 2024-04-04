import React, { useState } from "react";
import DataTable from "react-data-table-component";

import { PageWrapper } from "components/ui/PageWrapper";

import { tableCustomStyles } from "app/mock/catalog";

import { useNavigate } from "react-router-dom";

import { Edit2, Trash2 } from "lucide-react";

import "styles/catalog.css";
import { Button } from "components/ui/Button";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { ButtonLoader } from "components/Loader/ButtonLoader";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { GetAllCoupon, DeleteCouponMutation } from "rest/main";

export default function AllCoupons() {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const allCoupons = GetAllCoupon();
  const deleteCoupon = DeleteCouponMutation();

  const handleDelete = (id) => {
    const formData = new FormData();
    formData.append("id", id);
    deleteCoupon.mutate(formData);
  };

  const couponsData = [
    {
      name: "Coupon Name",
      selector: (row) => row.couponName,
    },
    {
      name: "Discount Type",
      selector: (row) => row.discountType,
    },

    {
      name: "Discount",
      selector: (row) => row.discount,
    },
    // {
    //   name: "Is Active",
    //   cell: (row) => (
    //     <div className="form-check form-switch">
    //       <input
    //         className="form-check-input inp_swip"
    //         type="checkbox"
    //         role="switch"
    //         id="flexSwitchCheckDefault"
    //         defaultChecked={"true"}
    //       />
    //     </div>
    //   ),
    // },
    {
      name: "edit",
      cell: (row) => (
        <span
          className="editbtn"
          onClick={() =>
            navigate({
              pathname: `/edit-coupon/${row?.id}`,
            })
          }
        >
          <Edit2 row={row} />
        </span>
      ),
      button: "true",
      style: {},
    },
    {
      name: "Delete",
      cell: (row) =>
        row?.id === id && deleteCoupon?.isPending ? (
          <ButtonLoader />
        ) : (
          <span
            onClick={() => {
              handleDelete(row?.id);
              setId(row?.id);
            }}
            className="deletebtn"
          >
            <Trash2 row={row} />
          </span>
        ),
      button: "true",
    },
  ];

  return (
    <>
      <PageWrapper slug="all-coupons" name="All Coupons" />
      <div className="d-flex justify-content-end mb-4 add_catalog_btn">
        <Button onClick={() => navigate("/create-coupon")}>
          Create Coupon
        </Button>
      </div>
      {allCoupons?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : (
        ""
      )}
      {allCoupons?.data?.data?.length < 1 ? (
        <InfoComponent message={"Please Add Data to Display"} />
      ) : null}
      {allCoupons?.isPending ? (
        <ComponentLoader />
      ) : (
        <div className="table-responsive">
          <DataTableExtensions
            columns={couponsData}
            data={allCoupons?.data?.data}
            filterPlaceholder="Search"
          >
            <DataTable
              pagination
              paginationPerPage={10}
              striped
              customStyles={tableCustomStyles}
            />
          </DataTableExtensions>
        </div>
      )}
    </>
  );
}
