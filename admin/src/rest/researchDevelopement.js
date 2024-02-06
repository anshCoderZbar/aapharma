import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";

export const CreateResearchDevelopmentBanner = () => {
  const { notify } = useNotifications();
  const bannerMutation = useMutation({
    mutationFn: (data) =>
      client.researchDevelopmentBanner.createResearchDevelopmentBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-development-banner"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerMutation;
};

export const GetResearchDevelopmentBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-research-development-banner"],
    queryFn: () =>
      client.researchDevelopmentBanner.getResearchDevelopmentBanner(),
  });
  return getBanner;
};

export const CreateResearchDevelopmentSort = () => {
  const { notify } = useNotifications();
  const createSort = useMutation({
    mutationFn: (data) =>
      client.researchDevelopmentBanner.createResearchDevelopmentSort(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-development-sort"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return createSort;
};

export const GetResearchDevelopmentSort = () => {
  const getSort = useQuery({
    queryKey: ["get-research-development-sort"],
    queryFn: () =>
      client.researchDevelopmentBanner.getResearchDevelopmentSort(),
  });
  return getSort;
};
