import { useMutation, useQuery } from "@tanstack/react-query";
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

export const GetAllWhitePapers = () => {
  const getWhitepaper = useQuery({
    queryKey: ["get-all-whitepaper"],
    queryFn: () => client.resources.allWhitepapers(),
  });
  return getWhitepaper;
};

export const GetSingleWhitePapers = (data) => {
  const singleWhitepaper = useQuery({
    queryKey: ["get-single-whitepaper"],
    queryFn: () => client.resources.singleWhitepaper(data),
  });
  return singleWhitepaper;
};

export const FilterWhitepaperMutation = () => {
  const filterWhitepaper = useMutation({
    mutationFn: (data) => client.resources.filterWhitepaper(data),
    onSuccess: () => {
      //
    },
    onError: () => {
      //
    },
  });
  return filterWhitepaper;
};

// conferences

export const GetConferenceBannerMutation = () => {
  const conferenceBanner = useQuery({
    queryKey: ["get-conference-banner"],
    queryFn: () => client.resources.getConferenceBanner(),
  });
  return conferenceBanner;
};

export const GetConferenceCardsMutation = () => {
  const confrenceCard = useQuery({
    queryKey: ["get-conference-cards"],
    queryFn: () => client.resources.getConferenceCards(),
  });
  return confrenceCard;
};
