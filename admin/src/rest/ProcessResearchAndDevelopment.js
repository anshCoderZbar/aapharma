import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const CreateProcessTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const tabsMutation = useMutation({
    mutationFn: (data) => client.process.createProcessTabs(data),
    onSuccess: () => {
      notify("Details Created Successfully", "success");
      navigate("/process-bottom-section");
      queryClient.invalidateQueries({
        queryKey: ["get-all-process-tabs"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return tabsMutation;
};

export const GetProcessTabsMutation = () => {
  const getTabs = useQuery({
    queryKey: ["get-all-process-tabs"],
    queryFn: () => client.process.getProcessTabs(),
  });
  return getTabs;
};

export const SingleProcessTabMutation = (data) => {
  const getSingleTab = useQuery({
    queryKey: ["get-single-all-process"],
    queryFn: () => client.process.singleProcessTabs(data),
  });
  return getSingleTab;
};

export const EditProcessTabsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editMutation = useMutation({
    mutationFn: (data) => client.process.editProcessTabs(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-process-tabs"],
      });
      navigate("/process-bottom-section");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editMutation;
};

export const DeleteProcessTabsMutation = () => {
  const { notify } = useNotifications();
  const deleteMutation = useMutation({
    mutationFn: (data) => client.process.deleteProcessTabs(data),
    onSuccess: () => {
      notify("Tabs Delete Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-all-process-tabs"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return deleteMutation;
};

export const EditProcessMidSectionMutation = () => {
  const { notify } = useNotifications();
  const midSection = useMutation({
    mutationFn: (data) => client.process.editProcessMidSection(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-process-mid-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return midSection;
};

export const GetProcessMidSectionMutation = () => {
  const midSection = useQuery({
    queryKey: ["get-process-mid-section"],
    queryFn: () => client.process.getProcessMidSection(),
  });
  return midSection;
};

export const EditProcessBannerMutation = () => {
  const { notify } = useNotifications();
  const bannerSection = useMutation({
    mutationFn: (data) => client.process.editProcessBanner(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-process-banner-section"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return bannerSection;
};

export const GetProcessBannerMutation = () => {
  const bannerSection = useQuery({
    queryKey: ["get-process-banner-section"],
    queryFn: () => client.process.getProcessBanner(),
  });
  return bannerSection;
};
