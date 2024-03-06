import { useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetResourcesHeading = () => {
  const getSort = useQuery({
    queryKey: ["get-resource-heading"],
    queryFn: () => client.resources.getResourceHeading(),
  });
  return getSort;
};

export const GetResourcesGuides = () => {
  const getGuides = useQuery({
    queryKey: ["get-resource-useful-guides"],
    queryFn: () => client.resources.getResourceUsefulGuides(),
  });
  return getGuides;
};

export const GetAllResourcesTabs = () => {
  const allTabs = useQuery({
    queryKey: ["get-resource-tabs"],
    queryFn: () => client.resources.allResourcesTabs(),
  });
  return allTabs;
};

// whitepaper
export const GetWhitePaperBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-whitepaper-banner"],
    queryFn: () => client.resources.getWhitePaperBanner(),
  });
  return getBanner;
};
