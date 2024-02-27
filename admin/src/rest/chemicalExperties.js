import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateChemistryBannerMutation = () => {
  const { notify } = useNotifications();
  const chemistryBanner = useMutation({
    mutationFn: (data) =>
      client.chemistryExpertise.createChemistryExpertiseBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-chemistry-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return chemistryBanner;
};

export const GetChemistryBannerMutation = () => {
  const chemistryBanner = useQuery({
    queryKey: ["get-chemistry-banner"],
    queryFn: () => client.chemistryExpertise.getChemistryExpertiseBanner(),
  });
  return chemistryBanner;
};

export const GetChemistryTabsMutation = () => {
  const chemistryTabs = useQuery({
    queryKey: ["get-all-chemistry-tabs"],
    queryFn: () => client.chemistryExpertise.getAllChemistryTabs(),
  });
  return chemistryTabs;
};

export const GetSingleChemistryTabsMutation = (data) => {
  const chemistryTabs = useQuery({
    queryKey: ["get-single-chemistry-tabs"],
    queryFn: () => client.chemistryExpertise.singleChemistryTabs(data),
  });
  return chemistryTabs;
};

export const CreateChemistryTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const chemistryTabs = useMutation({
    mutationFn: (data) => client.chemistryExpertise.createChemistryTabs(data),
    onSuccess: () => {
      notify("Data Added Successfully", "success");
      navigate("/chemistry-tabs");
      queryClient.invalidateQueries({ queryKey: ["get-all-chemistry-tabs"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return chemistryTabs;
};

export const EditChemistryTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const chemistryTabs = useMutation({
    mutationFn: (data) => client.chemistryExpertise.updateChemistryTabs(data),
    onSuccess: () => {
      notify("Data Updated Successfully", "success");
      navigate("/chemistry-tabs");
      queryClient.invalidateQueries({ queryKey: ["get-all-chemistry-tabs"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return chemistryTabs;
};

export const DeleteChemistryTabsMutation = () => {
  const { notify } = useNotifications();
  const chemistryTabs = useMutation({
    mutationFn: (data) => client.chemistryExpertise.deleteChemistryTabs(data),
    onSuccess: () => {
      notify("Data Deleted Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-chemistry-tabs"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return chemistryTabs;
};
