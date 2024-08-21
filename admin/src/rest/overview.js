import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const CreateOverviewBannerMutation = () => {
  const { notify } = useNotifications();
  const overviewBanner = useMutation({
    mutationFn: (data) => client.overview.createOverviewBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-overview-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return overviewBanner;
};

export const GetOverviewBannerMutation = () => {
  const overviewBanner = useQuery({
    queryKey: ["get-overview-banner"],
    queryFn: () => client.overview.getOverviewBanner(),
  });
  return overviewBanner;
};

export const AllOverviewTabsMutation = () => {
  const overviewTabs = useQuery({
    queryKey: ["get-all-overview-tabs"],
    queryFn: () => client.overview.allOverviewTabs(),
  });
  return overviewTabs;
};

export const AddOverviewTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const overviewTabs = useMutation({
    mutationFn: (data) => client.overview.addOverviewTabs(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-overview-tabs"] });
      navigate("/overview-tabs");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return overviewTabs;
};

export const DeleteOverviewTabsMutation = () => {
  const { notify } = useNotifications();
  const overviewTabs = useMutation({
    mutationFn: (data) => client.overview.deleteOverviewTabs(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-overview-tabs"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return overviewTabs;
};

export const SingleOverviewTabsMutation = (data) => {
  const overviewTabs = useQuery({
    queryKey: ["get-single-overview-tabs"],
    queryFn: () => client.overview.singleOverviewTabs(data),
  });
  return overviewTabs;
};

export const EditOverviewTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editList = useMutation({
    mutationFn: (data) => client.overview.editOverviewTabs(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-all-overview-tabs"] });
      navigate("/overview-tabs");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editList;
};
