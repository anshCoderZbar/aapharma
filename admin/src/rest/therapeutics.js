import { useNotifications } from "reapop";
import client from "./client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "queryclient";
import { useNavigate } from "react-router-dom";

export const GetTherapeuticsBanner = () => {
  const getBanner = useQuery({
    queryKey: ["get-therapeutics-banner"],
    queryFn: () => client.therapeutics.getTherapeuticsBanner(),
  });
  return getBanner;
};

export const CreateTherapeuticsBannerMutation = () => {
  const { notify } = useNotifications();
  const therapeuticsBanner = useMutation({
    mutationFn: (data) => client.therapeutics.updateTherapeuticsBanner(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-therapeutics-banner"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return therapeuticsBanner;
};

export const GetTherapeuticsSupport = () => {
  const getSupport = useQuery({
    queryKey: ["get-therapeutics-support"],
    queryFn: () => client.therapeutics.getTherapeuticsSupport(),
  });
  return getSupport;
};

export const CreateTherapeuticsSupport = () => {
  const { notify } = useNotifications();
  const therapeuticsSupport = useMutation({
    mutationFn: (data) => client.therapeutics.updateTherapeuticsSupport(data),
    onSuccess: () => {
      notify("Details Added Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-therapeutics-support"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return therapeuticsSupport;
};

export const GetAllTherapeuticsSteps = () => {
  const getSteps = useQuery({
    queryKey: ["get-therapeutics-steps"],
    queryFn: () => client.therapeutics.getAllStepsTherapeutics(),
  });
  return getSteps;
};
export const GetSingleTherapeuticsSteps = (data) => {
  const getSingleSteps = useQuery({
    queryKey: ["get-single-therapeutics-steps"],
    queryFn: () => client.therapeutics.getSingleStepsTherapeutics(data),
  });
  return getSingleSteps;
};

export const EditTherapeuticsStepsMutation = () => {
  const { notify } = useNotifications();
  const navigate = useNavigate();
  const editStep = useMutation({
    mutationFn: (data) => client.therapeutics.updateStepsTherapeutics(data),
    onSuccess: () => {
      notify("Details Updated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-therapeutics-steps"] });
      navigate("/therapeutics-steps");
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editStep;
};

export const GetServiceImage = (data) => {
  const getImage = useQuery({
    queryKey: ["get-service-image"],
    queryFn: () => client.therapeutics.serviceFeaturedImage(data),
  });
  return getImage;
};

export const EditServiceImage = () => {
  const { notify } = useNotifications();
  const editStep = useMutation({
    mutationFn: (data) => client.therapeutics.editServiceFeaturedImage(data),
    onSuccess: () => {
      notify("Image Upated Successfully", "success");
      queryClient.invalidateQueries({ queryKey: ["get-service-image"] });
    },

    onError: () => notify("OOPS! some error occured", "error"),
  });
  return editStep;
};
