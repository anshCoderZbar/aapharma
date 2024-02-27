import { useQuery } from "@tanstack/react-query";
import client from "./client";

export const GetChemistryBannerMutation = () => {
  const chemistryBanner = useQuery({
    queryKey: ["get-chemistry-banner"],
    queryFn: () => client.capabilities.getChemistryExpertiseBanner(),
  });
  return chemistryBanner;
};
