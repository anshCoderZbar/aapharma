import { PageWrapper } from "components/ui/PageWrapper";
import { useAtom } from "jotai";
import React from "react";
import { FetchAllChemical } from "rest/chemical";
import { userDetails } from "store/authentication";

import "styles/main.css";

export default function Dashboard() {
  const [authentication] = useAtom(userDetails);
  const fetchChemical = FetchAllChemical();
  return (
    <div>
      <PageWrapper slug="dashboard" name="Dashboard" />
      <div className="row">
        <div class="col-lg-4 col-md-4 col-4 mb-4">
          <div class="card listing_card">
            <div class="card-body">
              <span>No Of Products Added</span>
              <h3 class="card-title text-nowrap mb-1">
                {fetchChemical?.data?.data?.length}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
