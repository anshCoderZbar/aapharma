import { useMutation, useQuery } from "@tanstack/react-query";
import client from "./client";
import { useNotifications } from "reapop";
import { useNavigate } from "react-router-dom";
import { queryClient } from "queryclient";

export const EditResourcesHeading = () => {
  const { notify } = useNotifications();
  const editHeading = useMutation({
    mutationFn: (data) => client.resources.editResourceHeading(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-resource-heading"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editHeading;
};

export const GetResourcesHeading = () => {
  const getHeading = useQuery({
    queryKey: ["get-resource-heading"],
    queryFn: () => client.resources.getResourceHeading(),
  });
  return getHeading;
};

export const EditResourcesGuides = () => {
  const { notify } = useNotifications();
  const editGuides = useMutation({
    mutationFn: (data) => client.resources.editResourceUsefulGuides(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-resource-useful-guides"],
      });
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return editGuides;
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

export const SingleResourceTab = (formData) => {
  const singleTab = useQuery({
    queryKey: ["get-single-resource-tabs"],
    queryFn: () => client.resources.singleResourcesTabs(formData),
  });
  return singleTab;
};

export const EditSingleResourcesTab = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const singleTab = useMutation({
    mutationFn: (data) => client.resources.editResourcesTabs(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({
        queryKey: ["get-resource-tabs"],
      });
      navigate("/resources-tabs");
    },
    onError: () => {
      notify("OOPS! some error occured", "error");
    },
  });
  return singleTab;
};
