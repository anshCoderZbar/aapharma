import React from "react";
import { PageWrapper } from "components/ui/PageWrapper";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import "styles/main.css";

import { Info } from "lucide-react";
import { tableCustomStyles } from "app/mock/catalog";
import { ComponentLoader } from "components/Loader/ComponentLoader";
import { ErrorComponent } from "components/Alerts/Error";
import { InfoComponent } from "components/Alerts/Info";
import { GetAllOrders } from "rest/main";
import { useNavigate } from "react-router-dom";

export default function AllOrders() {
  const orders = GetAllOrders();
  const navigate = useNavigate();

  const ordersData = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },

    {
      name: "phone",
      selector: (row) => row.phone,
    },
    {
      name: "total",
      selector: (row) => row.total,
    },
    {
      name: "Payment Method",
      selector: (row) => row.paymentMethod,
    },
    {
      name: "edit",
      cell: (row) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/order-details/${row?.id}`)}
        >
          <Info row={row} />
        </span>
      ),
      button: true.toString(),
      style: {},
    },
  ];
  return (
    <>
      <PageWrapper slug="orders" name="Orders" />
      {orders?.isError ? (
        <ErrorComponent message="OOPS ! something went wrong" />
      ) : null}

      {orders?.isPending ? (
        <ComponentLoader />
      ) : orders?.data?.data.length >= 1 ? (
        <DataTableExtensions
          columns={ordersData}
          data={orders?.data?.data}
          filterPlaceholder="Search"
        >
          <DataTable
            pagination
            paginationPerPage={10}
            striped
            customStyles={tableCustomStyles}
          />
        </DataTableExtensions>
      ) : (
        <InfoComponent message={"No orders yet"} />
      )}
    </>
  );
}
