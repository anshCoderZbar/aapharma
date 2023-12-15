import { PageWrapper } from "components/ui/PageWrapper";
import { useAtom } from "jotai";
import React from "react";
import { userDetails } from "store/authentication";

export default function Dashboard() {
  const [authentication] = useAtom(userDetails);
  return (
    <div>
      <PageWrapper slug="dashboard" name="Dashboard" />
    </div>
  );
}
