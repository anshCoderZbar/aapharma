import React from "react";
import DataTable from "react-data-table-component";
import { PageWrapper } from "components/ui/PageWrapper";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { GetAllOrders } from "rest/main";

export default function AllOrders() {
  const orders = GetAllOrders();
  console.log(orders?.data?.data);
  return (
    <>
      <PageWrapper slug="orders" name="Orders" />
    </>
  );
}
