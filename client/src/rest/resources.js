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
