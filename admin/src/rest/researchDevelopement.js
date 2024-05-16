import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

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

export const GetResearchDevelopmentTabs = () => {
  const getTabs = useQuery({
    queryKey: ["get-research-development-tabs"],
    queryFn: () => client.researchDevelopmentBanner.getAllResearchTabs(),
  });
  return getTabs;
};

export const GetSingleResearchDevelopmentTabs = (data) => {
  const getSingleTabs = useQuery({
    queryKey: ["get-single-research-development-tabs"],
    queryFn: () => client.researchDevelopmentBanner.getSingleResearchTabs(data),
  });
  return getSingleTabs;
};

export const EditResearchTabs = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editResearch = useMutation({
    mutationFn: (data) =>
      client.researchDevelopmentBanner.editResearchTabs(data),
    onSuccess: () => {
      notify("Details Edited Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-research-development-tabs"],
      });
      navigate("/research-modification");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editResearch;
};
